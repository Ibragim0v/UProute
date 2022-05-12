import { useContext } from "react"
import { ModeContext } from "../../context/mode-context"
import { LangContext } from "../../context/lang-context"
import { lang } from "../../lang/lang"
import "./Footer.scss"

export const Footer = () => {

    const {mode} = useContext(ModeContext);
    const {language} = useContext(LangContext);

    return (
        <footer className={`container-fluid ${mode}`}>
            <p className="text-center">&copy; {lang[language].footer.text}</p>
        </footer>
    )
}