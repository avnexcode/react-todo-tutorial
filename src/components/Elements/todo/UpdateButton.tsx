import { Button } from "@/components/ui/button"
import { useTodoStore } from "@/stores/todo"

type UpdateButtonProps = {
    todoID: string
    className?: string
}

export const UpdateButton = (props: UpdateButtonProps) => {

    const { setGlobalTodoID, globalTodoID } = useTodoStore()

    const { todoID, className } = props

    const disabled = globalTodoID === todoID

    return (
        <Button size={'sm'} variant={'neutral'} className={`${className}`} onClick={() => setGlobalTodoID(todoID)} disabled={disabled}>
            {disabled ? 'On Update' : 'Update'}
        </Button>
    )
}