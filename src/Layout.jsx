import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import ScrollProgressBar from "./Components/ScrollProgressBar";

const Layout = ()=>{
  return(<>
    <NavBar />
    <ScrollProgressBar/>
    <Outlet/>
  </>)
}
export default Layout;