import { Button } from "@/components/ui/button"
import { useTodoStore } from "@/stores/todo"
import { CreateTodoInput } from "@/types/todo"
import { UseFormReturn } from "react-hook-form"

type CancelUpdateButton = {
    form: UseFormReturn<CreateTodoInput>
    disabled: boolean
}

export const CancelUpdateButton = (props: CancelUpdateButton) => {

    const { setGlobalTodoID } = useTodoStore()
    const { form, disabled } = props

    const handleCancel = () => {
        form.setValue('text', '')
        setGlobalTodoID('')
    }

    return <Button onClick={handleCancel} variant={'default'} className="text-white" disabled={disabled}>Cancel</Button>
    
}