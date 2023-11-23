import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Life from "./components/Life/Life";
import Toapply from "./components/Toapply/Toapply";
import Countact from "./components/Countact/Countact";
import { Toaster } from "react-hot-toast";


function App() {
 const routers = createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'/life' ,element:<Life/>},
    {path:'/toapply' ,element:<Toapply/>},
    {path:'/about' ,element:<About/>},
    {path:'/countact' ,element:<Countact/>},
  ]}
 ])

  return (
    <>
        <RouterProvider router={routers}></RouterProvider>
        <Toaster/>
    </>
  );
}

export default App;
