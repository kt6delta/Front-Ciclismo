interface FooterPageProps {
    pruf?: string;
}

export const FooterPage = ({ pruf }: FooterPageProps) => {

    return (
        <>
            <div className='bg-primary text-background flex justify-center w-full min-h-[5vh]
                sm:justify-end'
            >
            </div>
        </>
    )
}