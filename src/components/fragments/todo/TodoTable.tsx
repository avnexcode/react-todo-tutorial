import { Table, TableBody, TableHeader } from '@/components/ui/table'
import { TodoTableItem } from './TodoTableItem'
import { useQueryTodos } from '@/features/todo'
import { TodoTableLoading } from './TodoTableLoading'
import { TodoTableHead } from './TodoTableHead'
import { TodoTableCaption } from './TodoTableCaption'
import { RenderElements } from '@/utils/todo'
import { Todo } from '@/types/todo'

export const TodoTable = () => {

    const { data: todoData, isLoading: todoLoading } = useQueryTodos()

    return (
        <Table>
            {todoData && <TodoTableCaption todoLength={todoData?.length} />}
            <TableHeader>
                <TodoTableHead />
            </TableHeader>
            <TableBody>
                {todoLoading && <TodoTableLoading />}
                {!todoLoading && todoData && (
                    <RenderElements<Todo> of={todoData} render={(todo) => <TodoTableItem key={todo.id} todo={todo} />} />
                )}
            </TableBody>
        </Table>
    )
}
