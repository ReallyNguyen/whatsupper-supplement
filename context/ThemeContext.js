import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }, []);

    const switchDark = () => {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
    }

    const switchLight = () => {
        setTheme('light');
        localStorage.setItem('theme', 'light');
    }

    if (theme === null) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ switchDark, switchLight, theme }}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    )
}