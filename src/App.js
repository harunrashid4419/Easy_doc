import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Router/Router";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store";

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
