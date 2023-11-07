
import {  RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./home/home"
import SignUp from "./sign-up page/sign-up"
import SignIn from "./sign-in page/sign-in"
import AuthChecker from "./after-login page/afterLogin"

const app = () =>
{
    const router = createBrowserRouter([
        {path:'/',element:<Home/>},
        {path:'/sign-up',element:<SignUp/>},
        {path:'/sign-in',element:<SignIn/>},
        {path:'/logged-in',element:<AuthChecker/>},
    ])
    return (
        <RouterProvider router={router}/>
    )
}
export default app