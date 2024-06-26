import { Navbar, NavbarContent } from "@nextui-org/react";

export const Header = () => {
    return (
        <>
            <Navbar className="bg-primary min-h-[7vh] rounded-2xl">
                <>
                    <NavbarContent as="div" justify="end">
                    </NavbarContent>
                </>
            </Navbar>
        </>
    )
}