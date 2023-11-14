import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const [isSelected, setIsSelected] = React.useState(theme === "dark" ? true : false);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    };

    useEffect(() => {
        setMounted(true)
    }, [])


    return (
        <Switch
            defaultSelected
            onChange={toggleTheme}
            size="md"
            color="success"
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <FiMoon className={className} />
                ) : (
                    <FiSun className={className} />
                )
            }
        />
    )
}

export default ThemeSwitcher