import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext()

export const ModeProvider = ({children}) => {
    const storage = localStorage.getItem('theme')
    const [mode, setMode] = useState(storage || 'light');

    useEffect(() => {
        localStorage.setItem('theme', mode)
    }, [mode])

    return (
        <ModeContext.Provider value={{ mode,setMode }}>
            {children}
        </ModeContext.Provider>
    )
}