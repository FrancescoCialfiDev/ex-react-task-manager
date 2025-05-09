import style from "../components/style/headerComponent.module.css"
import { NavLink } from "react-router-dom"

const HeaderComponent = () => {

    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <div></div>
                <div>
                    <ul className={style.ul}>
                        <NavLink>Home </NavLink>
                        <NavLink>Contatti</NavLink>
                        <NavLink to={"/addTask"}>Pagina 1</NavLink>
                        <NavLink to={"/taskList"}>Pagina 2</NavLink>
                    </ul>
                </div>
                <div className={style.divForm}>
                    <form class={style.form} role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
    )
}

export { HeaderComponent }