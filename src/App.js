
import { RouterProvider } from "react-router-dom";
import routes from "./Router/Router";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./app/store";



function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
        <Toaster />
      </Provider>
    </>
  );
}

export default App;
