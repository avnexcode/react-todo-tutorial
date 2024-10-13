import { Input } from '@/components/ui/input'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { UseFormReturn } from 'react-hook-form'
import { CreateTodoInput } from '@/types/todo'

type TodoFormInnerProps = {
    form: UseFormReturn<CreateTodoInput>
    handleSubmit: () => void
}

export const TodoFormInner = (props: TodoFormInnerProps) => {

    const { form, handleSubmit } = props
    
    return (
        <form id='todo-form' onSubmit={handleSubmit}>
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