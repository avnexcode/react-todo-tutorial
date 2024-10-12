import { DeleteDialog, ToggleButton, UpdateButton } from '@/components/Elements/todo'
import { TableCell, TableRow } from '@/components/ui/table'
import { Todo } from '@/types/todo'

type TodoTableItemProps = {
    todo: Todo
}

export const TodoTableItem = (props: TodoTableItemProps) => {
    return (
        <TableRow>
            <TableCell className="text-left">{props.todo.text}</TableCell>
            <TableCell className="text-center">
                <ToggleButton todoID={props.todo.id} statusCheked={props.todo.status}/>
            </TableCell>
            <TableCell className="text-right flex gap-5 items-center justify-end">
                <UpdateButton todoID={props.todo.id} />
                <DeleteDialog todoID={props.todo.id} />
            </TableCell>
        </TableRow>
    )
}