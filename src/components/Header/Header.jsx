import "./Header.scss"
import { NavLink } from "react-router-dom"
import { ModeContext } from "../../context/mode-context"
import { LangContext } from "../../context/lang-context"
import { useContext } from "react"
import { lang } from "../../lang/lang"

export const Header = () => {

    const { mode, setMode } = useContext(ModeContext);
    const { language, setLanguage } = useContext(LangContext);

    const handleChangeMode = (e) => {

        setMode(e.target.value)

    }  

    const handleChangeLang = (e) => {

        setLanguage(e.target.value)

    }  


    return(
        <header className={`header container-fluid ${mode}`}>
            <div className="header__logo">
                <h2 className="header__logo-text">UProute</h2>
            </div>

            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <NavLink to="/" className={({ isActive }) => isActive ? "header__link--active header__link" : "header__link"}>{lang[language].header.user}</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to="/posts" className={({ isActive }) => isActive ? "header__link--active header__link" : "header__link"}>{lang[language].header.post}</NavLink>
                    </li>
                </ul>
            </nav>

            <select onClick={handleChangeLang} defaultValue={language} className="header__select">
                <option className="header__option" value="eng">eng</option>
                <option className="header__option" value="uz">uz</option>
            </select>

            <select defaultValue={mode} onChange={handleChangeMode} className="header__select">
                <option className="header__option" value="dark">{lang[language].header.mode.dark}</option>
                <option className="header__option" value="light">{lang[language].header.mode.light}</option>
            </select>
        </header>
    )
}