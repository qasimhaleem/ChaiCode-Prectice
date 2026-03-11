import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';

const ThemeSwitcher = () => {
    // Grab the data from our Context "teleporter"
    const { isDarkMode, toggleTheme } = useTheme();

    const themeStyles = {
        backgroundColor: isDarkMode ? '#2c3e50' : '#f8f9fa',
        color: isDarkMode ? '#ecf0f1' : '#2c3e50',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
    };

    return (
        <div style={themeStyles}>
            <h1>{isDarkMode ? 'Dark Mode Active 🌙' : 'Light Mode Active ☀️'}</h1>
            <p>This UI is powered by the React Context API.</p>

            <button
                onClick={toggleTheme}
                style={{
                    padding: '10px 20px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: isDarkMode ? '#f1c40f' : '#34495e',
                    color: isDarkMode ? '#000' : '#fff',
                    fontWeight: 'bold'
                }}
            >
                Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    );
};

export default function App() {
    return (
        <ThemeProvider>
            <ThemeSwitcher />
        </ThemeProvider>
    );
}