import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blogpage from "../pages/Blogpage/Blogpage";
import AllToyPage from "../pages/AllToyPage/AllToyPage";
import AddAToy from "../pages/AddAToy/AddAToy";
import MyToys from "../pages/MyToys/MyToys";

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
          path:'/alltoys',
          element: <AllToyPage></AllToyPage>
        },
        {
          path:'/blog',
          element:<Blogpage></Blogpage>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path:'/addtoy',
          element:<AddAToy></AddAToy>
        },
        {
          path:'/mytoys',
          element:<MyToys></MyToys>
        }
    ]
  }
])

export default router;