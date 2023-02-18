
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'
import routes from "./Router/Router";
import { Toaster } from "react-hot-toast";
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
