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
    const [systemTheme, setSystemTheme] = useState<ThemeType>("light")
    const handleSetTheme = (theme: ThemeType) => {
        window.document.documentElement.classList.toggle("dark", theme === "dark");
        setTheme(theme);
    };

    const handleSetSystemTheme = (ev: MediaQueryListEvent) => {
        setSystemTheme(ev.matches ? "dark" : "light")

    }

    const hasLocalStorageTheme = () => {
        const localStorageTheme = window.localStorage.getItem("theme")
        return (localStorageTheme === "dark" || localStorageTheme === "light") ? localStorageTheme : false
    }

    useEffect(() => {
        if (!hasLocalStorageTheme()) {
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleSetSystemTheme)
            return () => {
                window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handleSetSystemTheme)
            }
        }
    }, [])

    useEffect(() => {
        handleSetTheme(hasLocalStorageTheme() || systemTheme || "light")
    }, [systemTheme])

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


