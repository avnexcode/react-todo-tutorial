import { Table, TableBody, TableHeader } from '@/components/ui/table'
import { TodoTableItem } from './TodoTableItem'
import { useQueryTodos } from '@/features/todo'
import { Todo } from '@/types/todo'
import { TodoTableLoading } from './TodoTableLoading'
import { TodoTableHead } from './TodoTableHead'
import { TodoTableCaption } from './TodoTableCaption'

const renderElements = (todos: Todo[]) => todos.map(todo => <TodoTableItem key={todo.id} todo={todo} />)

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
                {!todoLoading && todoData && renderElements(todoData)}
            </TableBody>
        </Table>
    )
}
