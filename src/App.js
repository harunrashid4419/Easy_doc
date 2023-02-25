
import { RouterProvider } from "react-router-dom";
import routes from "./Router/Router";
import { Toaster } from "react-hot-toast";
<<<<<<< HEAD
=======
import { Provider } from "react-redux";
import store from "./app/store";

>>>>>>> main


function App() {
  return (
    <>

      <RouterProvider router={routes}></RouterProvider>
      <Toaster />

    </>
  );
}

export default App;
