import { Outlet } from "react-router-dom"
import Header from "../Components/Layout components/Header"
import Footer from "../Components/Layout components/Footer"
import ErrorBoundary from "../Components/Error Boundary/ErrorBoundary"

function Layout() {
    return (
        <>
            <ErrorBoundary>
                <Header />
            </ErrorBoundary>

            <ErrorBoundary>
                <main className="min-h-screen">
                    <Outlet />
                </main>
            </ErrorBoundary>            

            <ErrorBoundary>
                <Footer />
            </ErrorBoundary>
        </>
    )
}

export default Layout