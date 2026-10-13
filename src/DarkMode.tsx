import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(null);

function ThemeProvider({ children }){
    const [darkMode, setDarkMode] = useState(true);
    const context = {isDark: true, setDarkMode};
    return (
        <ThemeContext value={context}>
            {children}
        </ThemeContext>
    );
}

export function useTheme(){
    const theme = useContext(ThemeContext);

    const backgroundColor: object = {backgroundColor: theme? 'var(--dark-background)' : 'var(--light-background'};
    const color: object = {color: theme? 'var(--dark-color)' : 'var(--light-color)'};
    const shadow: object = {textShadow: `0 1px 3px ${theme? 'var(--dark-text-shadow)' : 'var(--light-text-shadow'}`, boxShadow: `${theme? 'var(--dark-box-shadow)' : 'var(--light-box-shadow)'}`};
    
    return {
        theme: theme,
        backgroundColor: backgroundColor,
        color: color,
        shadow: shadow
    };
}

export default function DarkMode(){
    const [darkMode, setDarkMode] = createContext(useState<boolean>());
    function ToggleDarkMode(){
        setDarkMode(darkMode? false : true);
    }

    return(
        <div style={{position: 'absolute', top: '20px', right: '20px'}}>
            <input type="checkbox" id="dark-mode-toggle" onChange={ToggleDarkMode} />
            <label htmlFor="dark-mode-toggle" className="toggle"></label>
        </div>
    )
}