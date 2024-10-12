import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./pages/home";
import TodoPage from "./pages/todo";
const router = createBrowserRouter([
  {
      path: "/",
      element: <MainLayout />,
      children: [
          {
              index: true,
              element: <HomePage />,
          },
          {
              path: 'todo',
              element: <TodoPage />,
          },
      ],
  },
]);

export default router;