import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import BerandaPage from "./pages/beranda"
import DaftarSaya from "./pages/beranda/DaftarSaya";
import Series from "./pages/beranda/Series";
import Films from "./pages/beranda/Films";
import Profile from "./pages/auth/Profile";
import Langganan from "./pages/langganan";
import Payment from "./pages/payment";
const router = createBrowserRouter([
  {
    path: "/",
    element: <BerandaPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  }
  ,
  {
    path: "/daftarsaya",
    element: <DaftarSaya/>,
  }
  ,
  {
    path: "/series",
    element: <Series/>,
  }
  ,
  {
    path: "/films",
    element: <Films/>,
  }
  ,
  {
    path: "/profile",
    element: <Profile/>,
  }
  ,
  {
    path: "/subscribe",
    element: <Langganan/>,
  }
  ,
  {
    path: "/payment/:id",
    element: <Payment/>,
  },
  
]);
function App() {

  return (
    
      
      <RouterProvider router={router} />
    
  )
}

export default App
