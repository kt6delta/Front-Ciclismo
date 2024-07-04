import React from 'react';

interface MenuProps {
    children?: React.ReactNode;
}

export const MenuAdmin: React.FC<MenuProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}