import React from "react";

type RenderElementsProps<T> = {
    of: T[]
    render: (item: T, index: number) => React.ReactNode
}

export const RenderElements = <T,>({ of, render }: RenderElementsProps<T>) => {
    return of.map((item, index) => render(item, index))
}