import { Button } from "@/components/ui/button"
import { useTodoStore } from "@/stores/todo"
import { Loader2 } from "lucide-react"

type SubmitButtonProps = {
    formID: string
    disabled?: boolean
    className?: string
}

export const SubmitButton = (props: SubmitButtonProps) => {

    const { disabled, formID, className } = props
    const { globalTodoID } = useTodoStore()
    
    return (
        <Button form={formID} variant={'neutral'} disabled={disabled} className={`${className}`}>
            {globalTodoID ? !disabled ? 'Update' : (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Updating...</>
            ) : !disabled ? 'Post' : (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Posting...</>
            )}
            
        </Button>
    )
}