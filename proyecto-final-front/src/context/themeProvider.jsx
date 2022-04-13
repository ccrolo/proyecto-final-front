import { themeContext } from "./themeContext";
import { useState } from "react";


const lightTheme= {
    primary:"success",
    secondary: "dark",
    success:"light",
    info: "warning",
    warning: "danger",
    danger: "primary",
    light: "info",
    dark: "secondary"
}

const darkTheme= {
    primary:"primary",
    secondary: "secondary",
    success: "warning",
    info: "light",
    warning: "primary",
    danger: "success",
    light: "light",
    dark: "warning"

}

function ThemeProvider({ children }) {

    const [theme, updateTheme] = useState(lightTheme)
    const [logName, setLogName]= useState('')
    const [cardsText, setCardsText] = useState()
    
   

    const changeTheme = () => {
    updateTheme(u => u === lightTheme ? darkTheme : lightTheme)
    }
    

    const footer= (theme === lightTheme?"rgba(255,255,255,0.5)":"rgb(58, 74, 61,0.6)")

    return <themeContext.Provider value={{theme, updateTheme, changeTheme, footer,logName, setLogName, cardsText, setCardsText}}>{children}</themeContext.Provider>

}

export default ThemeProvider;