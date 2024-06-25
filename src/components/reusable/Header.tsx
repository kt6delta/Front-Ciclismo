import Image from "next/image";
import useStore from '@/stores/stores';
import { Navbar, NavbarBrand, NavbarContent, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import Link from "next/link";

interface HeaderProps {
    user: boolean; //logeado true
    name?: string;
    gender?: boolean | null; //true hombre, false mujer
}

export const Header = ({ user, name, gender }: HeaderProps) => {
    const { setName, setGender, setUser } = useStore();
    return (
        <>
            <Navbar className="bg-primary min-h-[10vh]">
                {user && (
                    <>
                        <NavbarBrand>
                            <Link href={"/"} >
                                <Image
                                    width={"250"}
                                    height={"250"}
                                    src="/logo_white.svg"
                                    alt="logo consultorio psicologico"
                                    loading="lazy"
                                />
                            </Link>
                        </NavbarBrand>

                        <NavbarContent as="div" justify="end">
                            <Dropdown placement="bottom-end">
                                <DropdownTrigger>
                                    <Avatar
                                        isBordered
                                        as="button"
                                        className="transition-transform"
                                        color={gender ? "secondary" : "primary"}
                                        name={name}
                                        size="lg"
                                        src={gender == null ? undefined : gender ? "https://i.pravatar.cc/150?u=a04258a2462d826712d" : "https://i.pravatar.cc/150?u=a04258114e29026702d"}
                                    />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Profile Actions" variant="flat">
                                    <DropdownItem key="profile" className="h-14 gap-2">
                                        <p className="font-semibold">Ingreso como</p>
                                        <p className="font-semibold">{name}</p>
                                    </DropdownItem>
                                    <DropdownItem key="configurations">Configuraciones</DropdownItem>
                                    <DropdownItem key="logout" color="danger">
                                        Cerrar sesion
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavbarContent>

                    </>
                )}
                {!user && (
                    <>
                        <NavbarContent as="div" justify="end">
                            <Link href={"/"}>
                                <Image
                                    width={"250"}
                                    height={"250"}
                                    src="/logo_white.svg"
                                    alt="logo consultorio psicologico"
                                    loading="lazy"
                                />
                            </Link>
                        </NavbarContent>
                    </>
                )}
            </Navbar>
        </>
    )
}