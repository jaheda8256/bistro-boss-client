import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
         <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
         <Outlet></Outlet>
         </div>
         <div>
            <Footer></Footer>
         </div>

        </div>
    );
};

export default Main;