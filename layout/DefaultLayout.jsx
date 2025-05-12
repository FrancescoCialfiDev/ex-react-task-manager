import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../components/HeaderComponent";

const DefautlLayout = () => {
    return (
        <>
            <HeaderComponent />
            <main style={{ height: "calc(100vh - 200px)", padding: "10px", backgroundColor: "rgb(217, 221, 224)" }}>
                <Outlet />
            </main>
            <footer style={{ height: "100px" }}></footer>
        </>
    )
}
export { DefautlLayout };