import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import GridPattern from '@/components/ui/grid-pattern'

import { useToast } from '@/hooks/use-toast'
import { CreateTodoInput, createTodoSchema } from '@/types/todo'

export default function TodoPage() {

    const { toast } = useToast()

    const form = useForm<CreateTodoInput>({
        defaultValues: {
            text: ''
        },
        resolver: zodResolver(createTodoSchema)
    })

    const onSubmit = (values: CreateTodoInput) => {
        console.log(values)
        toast({
            title: 'Success',
            description: 'Sudah Crot',
            variant: 'success'
        })
    }

    return (
        <div className='gap-y-10 flex flex-col'>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle className='text-3xl'>Todo Form</CardTitle>
                        <CardDescription>Create Your Todo</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form id='todo-form' onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField
                                    control={form.control}
                                    name="text"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Todo</FormLabel>
                                            <FormControl>
                                                <Input placeholder="input todo here" {...field} autoComplete='off' autoFocus />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                    </CardContent>
                    <CardFooter className='place-content-end pt-5'>
                        <Button form='todo-form' variant={'neutral'}><Loader2 className="mr-2 h-4 w-4 animate-spin" />Post</Button>
                    </CardFooter>
                </Card>
            </div>
            <div>
                <Table>
                    <TableCaption>A list of your recent todos.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left">Todo</TableHead>
                            <TableHead className='text-center'>Status</TableHead>
                            <TableHead className='text-right'>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* Table Row */}
                        <TableRow>
                            <TableCell className="text-left">Todo 1</TableCell>
                            <TableCell className="text-center">
                                <Label htmlFor="status" className="flex items-center gap-2 justify-center">
                                    <Checkbox
                                        id="status"
                                        name="status"
                                    />
                                    Done
                                </Label>
                            </TableCell>
                            <TableCell className="text-right flex gap-5 items-center justify-end">
                                <Button size={'sm'} variant={'neutral'}>Update</Button>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button size={'sm'} variant={'destructive'}>Delete</Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                                            <DialogDescription>
                                                This action cannot be undone. This will permanently delete your todo
                                                and remove your data from our servers.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter>
                                            <Button variant="destructive" size="sm" className="ml-2">
                                                Delete
                                            </Button>
                                            <DialogClose asChild>
                                                <Button type="button" size={'sm'} variant="default" className='text-white'>
                                                    Cancel
                                                </Button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                        {/* Table Row */}
                        <TableRow>
                            <TableCell className="text-left">Todo 1</TableCell>
                            <TableCell className="text-center">
                                <Label htmlFor="status" className="flex items-center gap-2 justify-center">
                                    <Checkbox
                                        id="status"
                                        name="status"
                                    />
                                    Done
                                </Label>
                            </TableCell>
                            <TableCell className="text-right flex gap-5 items-center justify-end">
                                <Button size={'sm'} variant={'neutral'}>Update</Button>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button size={'sm'} variant={'destructive'}>Delete</Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                                            <DialogDescription>
                                                This action cannot be undone. This will permanently delete your todo
                                                and remove your data from our servers.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <Button type="button" size={'sm'} variant="default">
                                                    Close
                                                </Button>
                                            </DialogClose>
                                            <Button variant="destructive" size="sm" className="ml-2">
                                                Delete
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                        {/* Table Row */}
                        <TableRow>
                            <TableCell className="text-left">Todo 1</TableCell>
                            <TableCell className="text-center">
                                <Label htmlFor="status" className="flex items-center gap-2 justify-center">
                                    <Checkbox
                                        id="status"
                                        name="status"
                                    />
                                    Done
                                </Label>
                            </TableCell>
                            <TableCell className="text-right flex gap-5 items-center justify-end">
                                <Button size={'sm'} variant={'neutral'}>Update</Button>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button size={'sm'} variant={'destructive'}>Delete</Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                                            <DialogDescription>
                                                This action cannot be undone. This will permanently delete your todo
                                                and remove your data from our servers.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <Button type="button" size={'sm'} variant="default">
                                                    Close
                                                </Button>
                                            </DialogClose>
                                            <Button variant="destructive" size="sm" className="ml-2">
                                                Delete
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                        {/* Table Row */}
                        <TableRow>
                            <TableCell className="text-left">Todo 1</TableCell>
                            <TableCell className="text-center">
                                <Label htmlFor="status" className="flex items-center gap-2 justify-center">
                                    <Checkbox
                                        id="status"
                                        name="status"
                                    />
                                    Done
                                </Label>
                            </TableCell>
                            <TableCell className="text-right flex gap-5 items-center justify-end">
                                <Button size={'sm'} variant={'neutral'}>Update</Button>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button size={'sm'} variant={'destructive'}>Delete</Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                                            <DialogDescription>
                                                This action cannot be undone. This will permanently delete your todo
                                                and remove your data from our servers.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <Button type="button" size={'sm'} variant="default">
                                                    Close
                                                </Button>
                                            </DialogClose>
                                            <Button variant="destructive" size="sm" className="ml-2">
                                                Delete
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <GridPattern className="absolute inset-0 -z-10" />
        </div>
    )
}
