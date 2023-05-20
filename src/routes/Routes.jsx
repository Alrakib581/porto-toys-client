import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blogpage from "../pages/Blogpage/Blogpage";
import AllToyPage from "../pages/AllToyPage/AllToyPage";
import AddAToy from "../pages/AddAToy/AddAToy";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRout from "../layouts/PrivateRout/PrivateRout";
import UpdatePage from "../pages/UpdatePage/UpdatePage";

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
          element:<PrivateRout><AddAToy></AddAToy></PrivateRout>
        },
        {
          path:'/mytoys',
          element:<PrivateRout><MyToys></MyToys></PrivateRout>,
          loader: ()=> fetch('http://localhost:5000/toys')
        },
        {
          path:'/updateToy/:id',
          element:<PrivateRout><UpdatePage></UpdatePage></PrivateRout>,
          loader:({params})=> fetch(`http://localhost:5000/toys/${params.id}`)
        }
    ]
  }
])

export default router;