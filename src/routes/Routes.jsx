import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<HomePage></HomePage>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
    ]
  }
])

export default router;