import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import {Button} from "@nextui-org/react";

interface MenuProps {
    children?: React.ReactNode;
}

export const MenuAdmin: React.FC<MenuProps> = ({ children }) => {
    const [isVertical, setIsVertical] = React.useState(true);
    
    return (
        <div className="flex flex-col  px-4">
            <div className="flex w-full flex-col" >
                <Tabs aria-label="Options" isVertical={isVertical} className="mt-10">
                    <Tab key="carrera" title={
                        <div className="flex items-center">
                            
                            <img src="Alarm.png" alt="Carrera" style={{ width: '20px', marginRight: '8px' }} />
                            
                            Carrera
                        </div>
                    }>
                    </Tab>
                    <Tab key="equipos" title={
                        <div className="flex items-center p-4">
                            <img src="Users_Group.png" alt="Equipos" style={{ width: '20px', marginRight: '10px' }} />
                            Equipos
                        </div>
                    }>
                        
                    </Tab>
                    <Tab key="estadisticas" title={
                        <div className="flex items-center">
                            <img src="chart.png" alt="Estadisticas" style={{ width: '20px', marginRight: '8px' }} />
                            Estadisticas
                        </div>
                    }>
                        
                    </Tab>
                </Tabs>
                    <div className=" -ml-1  mt-5 text-gray-400 select-none font-bold">
                        _____________________
                    <Button color="primary" variant="light" className="min-h-12 mt-6 flex text-black items-center" >
                        <div className="flex items-center  -ml-4 ">
                            <img src="LogOut.png" alt="Cerrar sesion" style={{ width: '40px', marginRight: '10px', marginTop: "6px", marginLeft:"4px" }} />
                            Cerrar Sesión
                        </div>
                    </Button>
                    </div>
            </div>
        </div>
    );
}
