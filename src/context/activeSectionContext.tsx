"use client"
import { createContext, useContext, useState } from 'react'

export const ActiveSectionContext = createContext<any>(null)

function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
    const [activeSection, setActiveSection] = useState<any>("home")
    const state = {
        activeSection,
        setActiveSection
    }


    return (
        <ActiveSectionContext.Provider value={state}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export default ActiveSectionContextProvider


export const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext)
    if (context === null) {
        throw new Error("use active section context must be used within a ActiveSectionContextProvider")
    }
    return context
}