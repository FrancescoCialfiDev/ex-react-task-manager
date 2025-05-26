import style from "../components/style/headerComponent.module.css"
import { NavLink } from "react-router-dom"

const HeaderComponent = () => {

    return (
        <header className={style.header}>
            <nav className={`navbar navbar-expand-lg h-100 ${style.customNav}`}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link">Lista Tasks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/addTask"} className="nav-link">Aggiungi Task</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export { HeaderComponent }