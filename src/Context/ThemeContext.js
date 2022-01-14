import { useState, createContext, useEffect } from "react";


const Context = createContext()

function Provider({children}){

    const [theme, setTheme] = useState(window.localStorage.getItem("theme") || "light")

    useEffect (() =>{
        window.localStorage.setItem("theme", theme)
        
    }, [theme])
    

    return(
        <Context.Provider value={{theme, setTheme}}>{children}</Context.Provider>
    )
}

export {Provider, Context}