import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Homewrapper from "./pages/Homewrapper";
import DashboardWrapper from "./pages/DashboardWrapper";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";
import { loader as userLoader } from "./pages/DashboardWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homewrapper/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/register",
        element: <Register/>,
        
      },
      {
        path: "/login",
        element: <Login/>,
        
      }

    ]

  },
  {
    path:"/dashboard",
    element: <DashboardWrapper/>,
    loader: userLoader,
    
  }
 
]);

//routes
 


const App = () => {
  return <RouterProvider router={router} />
}

export default App