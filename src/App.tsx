import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { DragDropContext } from "react-beautiful-dnd";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const onDragEnd = (result: any) => {
    console.log(result);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <RouterProvider router={router}></RouterProvider>
    </DragDropContext>
  );
}

export default App;
