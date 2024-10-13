import React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type ProvidersProps = {
    children: React.ReactNode
}

const queryClient = new QueryClient()

export const Providers: React.FC<ProvidersProps> = (props) => {
    return (
        <QueryClientProvider client={queryClient}>
            {props.children}
        </QueryClientProvider>
    )
}