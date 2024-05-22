import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
         <div className="max-w-screen-xl mx-auto">
            { noHeaderFooter || <Navbar></Navbar>}
         <Outlet></Outlet>
         </div>
         <div>
           { noHeaderFooter || <Footer></Footer>}
         </div>

        </div>
    );
};

export default Main;