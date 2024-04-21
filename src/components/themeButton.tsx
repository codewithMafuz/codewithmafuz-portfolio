"use client"
import React from 'react'
import { useThemeContextProvider } from '../../context/themeContext'
import { BiSun, BiMoon } from "react-icons/bi";
import { motion } from 'framer-motion'

const ThemeButton = () => {
    const { theme, setTheme } = useThemeContextProvider()
    const opositeMode = theme === "light" ? "dark" : "light"

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: '.2' }}
            data-tip={"make " + opositeMode + " mode"}
            onFocus={(ev) => {
                ev.target.blur()
            }}
            onClick={() => {
                setTheme(opositeMode)
                localStorage.setItem("theme", opositeMode)
            }} className='tooltip bg-gray-200 rounded-full fixed bottom-2 lg:bottom-4 right-[3vw] lg:right-[5vw] z-[99999] p-2 transition-all hover:opacity-100 opacity-60'>
            {theme === 'light' ?
                <BiMoon className='text-[1.7rem] lg:text-[2.1rem] text-gray-500 hover:opacity-100 opacity-60' />
                :
                <BiSun className='text-[1.7rem] lg:text-[2.1rem] text-gray-500 hover:opacity-100 opacity-60' />
            }
        </motion.button>
    )
}

export default ThemeButton