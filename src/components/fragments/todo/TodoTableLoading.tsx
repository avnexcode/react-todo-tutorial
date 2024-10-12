import { Skeleton } from "@/components/ui/skeleton"
import { TableCell, TableRow } from "@/components/ui/table"

export const TodoTableLoading = () => {
    return (
        <TableRow>
            <TableCell className="text-left" colSpan={3}>
                <Skeleton className="w-full h-[20px] rounded-full" />
            </TableCell>
        </TableRow>
    )
}