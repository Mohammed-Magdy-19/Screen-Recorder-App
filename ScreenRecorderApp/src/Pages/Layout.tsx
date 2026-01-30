import { Outlet } from "react-router-dom"
import Header from "../Components/Layout components/Header"
import Footer from "../Components/Layout components/Footer"


function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}



export default Layout

