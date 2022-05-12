import { useContext } from "react"
import { ModeContext } from "../../context/mode-context"
import { lang } from "../../lang/lang"
import "./Footer.scss"

export const Footer = () => {

    const {mode} = useContext(ModeContext)

    return (
        <footer className={`container-fluid ${mode}`}>
            <p className="text-center">&copy; {lang.uz.footer.text}</p>
        </footer>
    )
} 