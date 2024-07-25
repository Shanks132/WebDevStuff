import 
{ createBrowserRouter,
  // createRoutesFromElements, 
  // Route, 
  RouterProvider 
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";
// import Potato from "./pages/Potato";

const router = createBrowserRouter([
  {path:"/root",
  errorElement:<Error/>,  
  element:<RootLayout/>,
  children:[
    // {path:'',element:<HomePage/>},
    {index:true, element:<HomePage/>},
    {path:'products', element:<Products/>},
    {path:'products/:productId', element:<ProductDetailPage/>},
  ]
},

])

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/potato" element={<Potato/>}/>
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions)
function App() {
  return (<RouterProvider router={router}/>    )
    ;
}

export default App;
