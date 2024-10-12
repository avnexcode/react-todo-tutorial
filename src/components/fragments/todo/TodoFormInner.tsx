import { Input } from '@/components/ui/input'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { UseFormReturn } from 'react-hook-form'
import { CreateTodoInput } from '@/types/todo'

type TodoFormInnerProps = {
    form: UseFormReturn<CreateTodoInput>
    onSubmit: (values: CreateTodoInput) => void
}

export const TodoFormInner = (props: TodoFormInnerProps) => {
    const { form, onSubmit } = props
    return (
        <form id='todo-form' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Todo</FormLabel>
                        <FormControl>
                            <Input placeholder="input todo here" {...field} autoComplete='off' autoFocus />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </form>
    )
}