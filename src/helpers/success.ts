import { UseFormReturn } from 'react-hook-form';
import { CreateTodoInput } from '@/types/todo';
import { Toast } from '@/hooks/use-toast';

type HandleSuccessParams = {
    action: 'created' | 'updated' | 'change status' | 'deleted';
    toast: ({ ...props }: Toast) => void;
    todoRefetch?: () => void;
    form?: UseFormReturn<CreateTodoInput>;
    setGlobalTodoID?: (id: string) => void;
};

export const handleSuccess = (props: HandleSuccessParams) => {

    const { action, toast, todoRefetch, form, setGlobalTodoID } = props

    if (todoRefetch) todoRefetch();
    if (form) form.reset();
    if (setGlobalTodoID) if (action === 'updated') setGlobalTodoID('');

    toast({
        title: 'Success',
        description: `Success ${action} todo`,
        variant: 'success'
    });
};