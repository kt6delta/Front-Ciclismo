import { Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export const Header = () => {
    return (
        <Navbar className="bg-primary min-h-[5vh] p-0 rounded-2xl w-full h-28 justify-start ">
            <NavbarContent as="div" justify="start" className="p-0">
                <div className="ml-0 p-0">
                    <Dropdown className="">
                        <DropdownTrigger>
                            <Button className="bg-primary h-16 w-16">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="6 6 10 10" strokeWidth={2} stroke="currentColor" className="size-28">
                                    <path strokeLinecap="round" strokeLinejoin="round" color="white" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new" >Creacion de Equipo </DropdownItem>  
                            <DropdownItem key="copy">Copy link</DropdownItem>
                            <DropdownItem key="edit">Edit file</DropdownItem>
                            <DropdownItem key="delete" className="text-danger" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </NavbarContent>
        </Navbar>
    );
}