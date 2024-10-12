export type QueryResponse = {
    data?: Todo[] | null,
    isLoading?: boolean;
    isError?: Error | null;
    refetch?: () => Promise<void>;
}

export type MutationResponse = {
    data?: Todo | null,
    isPending?: boolean;
    isError?: Error | null;
    variables?: Todo | null;
    mutate?: (data: Todo) => Promise<void>;
}