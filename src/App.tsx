import Home from "./pages/home/Home"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import User from "./pages/users/User";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import './styles/global.scss'

function App() {

  const Layout =()=>{
    return (
      <div className="main">
        <Navbar />
          <div className="container">
          <div className="menu-container">
            <Menu />
            </div>
            <div className="content-container">
            <Outlet />
          </div>
          </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children : [
        {
          path : "/",
          element : <Home />
        },
        {
          path : "users",
          element : <User />
        },
        {
          path : "products",
          element : <Products />
        },

      ]
    }
    
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
