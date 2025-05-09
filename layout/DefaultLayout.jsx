import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../components/HeaderComponent";

const DefautlLayout = () => {

    return (
        <>
            <HeaderComponent />
            <main>
                <Outlet />
            </main>
        </>
    )
}
export { DefautlLayout } 