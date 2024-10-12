import { axiosInstance } from "@/lib/axios";
import { TodoMutationResponse } from "@/types";
import { CreateTodoInput } from "@/types/todo";
import { useState } from "react";

export const useMutationCreateTodo = ({ onSuccess }: { onSuccess: () => void }) => {
    const [state, setState] = useState<TodoMutationResponse>({
        data: null,
        isPending: false,
        isError: null,
    })
    const mutate = async (data: CreateTodoInput) => {
        setState(prev => ({ ...prev, isPending: true }))
        try {
            const response = await axiosInstance.post('/todos', data);
            setState({
                data: response.data.data,
                isPending: true,
            })
            onSuccess()
        } catch (err) {
            setState(prev => ({
                ...prev,
                isError: err instanceof Error ? err : new Error('An error occurred while creating user'),
            }))
        } finally{
            setState(prev => ({
                ...prev,
                isPending: false,
            }))
        }
    }

    return { ...state, mutate }
}