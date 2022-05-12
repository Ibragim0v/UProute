import { createContext, useEffect, useState } from "react";

export const LangContext = createContext()

export const LangProvider = ({children}) => {
    const storage = localStorage.getItem('language')
    const [language, setLang] = useState(storage || 'uz');

    useEffect(() => {
        localStorage.setItem('language', language)
    }, [language])


    return (
        <LangContext.Provider value={{ language, setLang }}>
            {children}
        </LangContext.Provider>
    )
}