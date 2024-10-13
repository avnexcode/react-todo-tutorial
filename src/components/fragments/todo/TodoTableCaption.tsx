import { TableCaption } from "@/components/ui/table"

type TodoTableCaptionProps = {
    todoLength: number
}
export const TodoTableCaption = (props: TodoTableCaptionProps) => {
    
    const { todoLength } = props
    
    return todoLength > 0 ?
        <TableCaption>A list of your recent todos.</TableCaption> :
        <TableCaption>You have no todos at the moment.</TableCaption>
}