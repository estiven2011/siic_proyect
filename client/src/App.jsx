import { BrowserRouter,useRoutes } from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import Home from "./pages/home/home"
import Videos from "./pages/videos/videos"
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import Presentaciones from "./pages/presentaciones/presentaciones"
import Sesiones from "./pages/sesiones/sesiones"
import Ejercicios from "./pages/ejercicios/ejercicios"
import Profile from "./pages/profile/profile"
// import {GlobalContextProvider} from "./contexto/contexto"

function Router (){
  let router = useRoutes([
    {path:"/",element:<Home/>},
    {path:"/presentaciones",element:<Presentaciones/>},
    {path:"/videos",element:<Videos/>},
    {path:"/sesiones",element:<Sesiones/>},
    {path:"/ejercicios",element:<Ejercicios/>},
    {path:"/login",element:<Login/>},
    {path:"/register",element:<Register/>},
    {path:"/profile",element:<Profile/>},

  ]
  )
  return router
}

function App() {

  return (
    <>
    {/* <GlobalContextProvider> */}
      <BrowserRouter>
        <Navbar/>
        <Router/>
        <Footer/>
      </BrowserRouter>
    {/* </GlobalContextProvider>  */}
    </>
  )
}

export default App
