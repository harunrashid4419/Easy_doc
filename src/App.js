import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </>
  );
}

export default App;
