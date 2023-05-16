import { useEffect, useState } from "react"
import { getFromLS, setToLS } from "../utility/localStorage"

const useTheme = () => {
    const themes = getFromLS('all-themes')
    // by default light mode is selected
    const [ currentTheme, setCurrentTheme ] = useState(themes.data.light)
    const [ themeLoaded ,setThemeLoaded ] = useState(false)


    const setTheme = (mode) => {
        setToLS('current-theme', mode)
        setCurrentTheme(mode)

    }

    useEffect(() => {
        const localSavedTheme = getFromLS('theme')
        localSavedTheme ? setCurrentTheme(localSavedTheme) : setCurrentTheme(themes.data.seaWave)
        setThemeLoaded(true)
    },[])


    return {
        themeLoaded,
        currentTheme,
        setTheme,
        
    }
    
}

export default useTheme