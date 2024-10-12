import { TodoForm, TodoTable } from "@/components/fragments/todo";

export default function TodoPage() {
    return (
        <div className='gap-y-10 flex flex-col'>
            <header>
                <TodoForm />
            </header>
            <main>
                <TodoTable />
            </main>
        </div>
    )
}
