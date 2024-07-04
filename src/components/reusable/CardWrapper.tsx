interface CardWrapperProps {
    children: React.ReactNode;
    className: string;
}

export const CardWrapper = ({children, className } : CardWrapperProps) => {
    
    return(
        <div className={`${className} rounded-default shadow-card w-full`}>
            {children}
        </div>
    )
}