"use client"

import { createContext, useContext, useEffect, useState } from "react"

type ThemeType = "light" | "dark"
type ThemeContextProps = {
    theme: ThemeType,
    setTheme: (theme?: ThemeType) => void

}


export const ThemeContext = createContext<any>(null)

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>('light')

    const handleSetTheme = (theme: ThemeType) => {
        if (theme === "dark") {
            window.document.documentElement.classList.add("dark")
        } else {
            window.document.documentElement.classList.remove("dark")
        }
        setTheme(theme)
    }

    useEffect(() => {
        const isPrefersModeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const prefered = isPrefersModeDark ? "dark" : "light"
        const themeIs: any = window.localStorage.getItem("theme") || prefered || "light"
        handleSetTheme(themeIs)

    }, [])


    const state = {
        theme,
        setTheme: handleSetTheme
    }


    return (
        <ThemeContext.Provider value={state}>
            {children}
        </ThemeContext.Provider>
    )

}


export default ThemeContextProvider


export const useThemeContextProvider = () => {
    const context = useContext<ThemeContextProps>(ThemeContext)

    if (context === null) {
        throw new Error("use theme context must be used within a ThemeContextProvider")
    }
    return context
}