import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

import { DeleteButton } from './DeleteButton'
import { useState } from 'react'

type DeleteButtonProps = {
    todoID: string
}

export const DeleteDialog = (props: DeleteButtonProps) => {

    const { todoID } = props
    
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
                    <DeleteButton todoID={todoID} setIsOpen={setIsOpen}/>
                    <DialogClose asChild>
                        <Button type="button" size={'sm'} variant="default" className='text-white'>
                            Cancel
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}