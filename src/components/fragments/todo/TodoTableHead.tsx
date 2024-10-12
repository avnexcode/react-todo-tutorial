import { TableHead, TableRow } from "@/components/ui/table"

export const TodoTableHead = () => {
    return (
        <TableRow>
            <TableHead className="text-left">Todo</TableHead>
            <TableHead className='text-center'>Status</TableHead>
            <TableHead className='text-right'>Action</TableHead>
        </TableRow>
    )
}