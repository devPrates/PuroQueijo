import { Outlet } from "react-router-dom";
import Navbar from "../admin/Navbar/Navbar";
import Sidebar from "../admin/Sidebar/Sidebar";
import "./pages.css"

function Admin(){
    return(
        <>
            <main className="d-flex">
                <Sidebar />
                <section className="admin__flex d-flex w-100 flex-column">
                    <Navbar />
                    <Outlet />
                </section>
            </main>
        </>
    )
}

export default Admin