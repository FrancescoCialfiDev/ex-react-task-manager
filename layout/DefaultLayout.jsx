import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../components/HeaderComponent";

const DefautlLayout = () => {
    return (
        <>
            <HeaderComponent />
            <main style={{ height: "calc(100vh - 80px)", padding: "10px", backgroundColor: "rgb(50, 64, 95)" }}>
                <Outlet />
            </main>
        </>
    )
}
export { DefautlLayout };