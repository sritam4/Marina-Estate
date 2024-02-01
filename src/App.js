import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Buy from "./Pages/Buy";
import Rent from "./Pages/Rent";
import Login from "./Pages/Login";
import AppLayout from "./Components/AppLayout";
import Home from "./Pages/Home";
import Agencies from "./Pages/Agencies";
import About from "./Pages/About";
import Details from "./Pages/Details";
import { Provider } from "react-redux";
import store from "./Utils/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/for-buy",
        element: <Buy />,
      },
      {
        path: "/for-rent",
        element: <Rent />,
      },
      {
        path: "/agencies",
        element: <Agencies />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
