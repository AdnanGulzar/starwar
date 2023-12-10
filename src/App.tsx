import './App.css'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Home from './pages/home/Home'
import Category from './pages/category/Category'
import BasicLayout from './components/layout/Layout'
import SingleCategory from './pages/SingleCategory/SingleCategory'
import ItemDetail from './components/item/ItemDetail'
const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <BasicLayout/>
    ),
    children:[
      {
        path: "/categories",
        element: <Category/>,
       
      },
      {
        path: "/categories/:id",
        element: <SingleCategory/>,
       
      },
      {
        path: "/item/:id",
        element: <ItemDetail/>,
       
      },
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <h1>About Us</h1>,
      },
    ]
  },
 
]);
function App():JSX.Element {

  return (<>
  
  <RouterProvider router={router} />

  
  </>
   
           
  
  )
}


export default App
