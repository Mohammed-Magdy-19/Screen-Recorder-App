import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/routes"
import { Toaster } from "sonner"


function App() {

  return (
    <>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </>
  )
}

export default App
