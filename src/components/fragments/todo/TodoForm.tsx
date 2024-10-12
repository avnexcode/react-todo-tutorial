import { Form } from '@/components/ui/form'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from '@/hooks/use-toast'
import { CreateTodoInput, createTodoSchema } from '@/types/todo'
import { TodoFormInner } from './TodoFormInner'
import { CancelUpdateButton, SubmitButton } from '@/components/Elements/todo'
import { useMutationCreateTodo, useMutationUpdateTodo, useQueryTodoID, useQueryTodos } from '@/features/todo'
import { useTodoStore } from '@/stores/todo'
import { useEffect } from 'react'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'

export const TodoForm = () => {

    const { toast } = useToast()

    const { globalTodoID, setGlobalTodoID } = useTodoStore()

    const { refetch: todoRefetch } = useQueryTodos()

    const { data: todoIDData } = useQueryTodoID(globalTodoID)

    const handleSuccess = (action: 'created' | 'updated') => {
        todoRefetch()
        toast({
            title: 'Success',
            description: `Success ${action} todo`,
            variant: 'success'
        })
        form.reset()
        if (action === 'updated') setGlobalTodoID('')
    }

    const { mutate: createTodo, isPending: createPending } = useMutationCreateTodo({
        onSuccess: () => handleSuccess('created')
    })

    const { mutate: updateTodo, isPending: updatePending } = useMutationUpdateTodo({
        onSuccess: () => handleSuccess('updated')
    })

    const form = useForm<CreateTodoInput>({
        defaultValues: { text: '' },
        resolver: zodResolver(createTodoSchema)
    })

    useEffect(() => {
        if (globalTodoID && todoIDData) form.setValue('text', todoIDData.text)
    }, [globalTodoID, form, todoIDData])

    const onSubmit = (values: CreateTodoInput) => {
        if (!globalTodoID) {
            createTodo(values)
        } else {
            updateTodo(globalTodoID, {
                ...values,
                status: Boolean(todoIDData?.status)
            })
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-3xl'>
                    <AnimatedShinyText>Todo Form</AnimatedShinyText>
                </CardTitle>
                <CardDescription>Create Your Todo</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <TodoFormInner form={form} onSubmit={onSubmit} />
                </Form>
            </CardContent>
            <CardFooter className='place-content-end pt-5 flex gap-5'>
                <SubmitButton formID='todo-form' disabled={createPending || updatePending} />
                {globalTodoID && <CancelUpdateButton form={form} disabled={updatePending!} />}
            </CardFooter>
        </Card>
    )
}