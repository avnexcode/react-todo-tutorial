import { UseFormReturn } from 'react-hook-form';
import { CreateTodoInput } from '@/types/todo';
import { Toast } from '@/components/ui/toast';

type HandleSuccessParams = {
    action: 'created' | 'updated';
    toast: (props: Toast) => void;
    todoRefetch: () => void;
    form: UseFormReturn<CreateTodoInput>;
    setGlobalTodoID: (id: string) => void;
};

export const handleSuccess = (args: HandleSuccessParams) => {

    const { action, toast, todoRefetch, form, setGlobalTodoID } = args

    todoRefetch();
    
    toast({
        title: 'Success',
        description: `Success ${action} todo`,
        variant: 'success',
    });

    form.reset();

    if (action === 'updated') setGlobalTodoID('');
};