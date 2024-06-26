import React from 'react';

interface MenuProps {
    children?: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}