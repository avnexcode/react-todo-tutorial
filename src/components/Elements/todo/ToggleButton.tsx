import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useMutationUpdateTodo } from '@/features/todo'
import { useToast } from '@/hooks/use-toast'

type ToggleButtonProps = {
    todoID: string
    className?: string
    statusCheked?: boolean
}

export const ToggleButton = (props: ToggleButtonProps) => {

    const { toast } = useToast()

    const { todoID, className, statusCheked } = props

    const { mutate: toggleStatus, isPending: togglePending } = useMutationUpdateTodo({
        onSuccess: () => {
            toast({
                title: 'Success',
                description: `Success change status todo`,
                variant: 'success'
            })
        }
    })

    return (
        <Label htmlFor="status" className={`flex items-center gap-2 justify-center ${className}`}>
            <Checkbox
                id="status"
                name="status"
                checked={Boolean(statusCheked)}
                onCheckedChange={(checked) => toggleStatus(todoID, { status: checked as boolean })}
                disabled={togglePending}
            />
            {statusCheked ? 'Done' : 'On Going'}
        </Label>
    )
}