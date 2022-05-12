import { createContext, useState, useEffect } from "react";

export const LangContext = createContext();

export const LangProvider = ({children}) => {
    const storage = localStorage.getItem('lang')
    const [language, setLanguage] = useState(storage || 'uz');

    useEffect(() => {
        localStorage.setItem('lang', language)
    }, [language])

    return (
        <LangContext.Provider value={{language, setLanguage}}>
            {children}
        </LangContext.Provider>
    )
} 