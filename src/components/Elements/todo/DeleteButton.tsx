import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useMutationDeleteTodo } from '@/features/todo'
import { useToast } from '@/hooks/use-toast'

type DeleteButtonProps = {
    todoID: string
    setIsOpen: (val: boolean) => void
    className?: string
}

export const DeleteButton = (props: DeleteButtonProps) => {

    const { setIsOpen, todoID, className } = props

    const { toast } = useToast()

    const { mutate: deleteTodo, isPending: deletePending } = useMutationDeleteTodo({
        onSuccess: () => {
            toast({
                title: 'Success',
                description: 'Success deleted todo'
            })
            setIsOpen(false)
        }
    })

    const handleDelete = () => deleteTodo(todoID)

    return (
        <Button variant="destructive" size="sm" className={`${className}`} onClick={handleDelete} disabled={deletePending}>
            {!deletePending ? 'Delete' : (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Deleting...</>
            )}
        </Button>

    )
}