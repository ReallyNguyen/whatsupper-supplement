import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const switchDark = () => {
        setTheme("dark");
    }

    const switchLight = () => {
        setTheme("light");
    }

    return (
        <ThemeContext.Provider value={{ switchDark, switchLight, theme }}>
            <div className={`${theme} anim`}>{children}</div>
        </ThemeContext.Provider>
    )
}
