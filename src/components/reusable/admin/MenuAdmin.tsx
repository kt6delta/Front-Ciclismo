"use client";
import React, { useState } from "react";
import { Tabs, Tab, Button } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { IoMdBicycle } from "react-icons/io";

export const MenuAdmin = () => {
  const [isVertical, setIsVertical] = useState(true);

  return (
    <>
      <div className="w-1/5 flex flex-col gap-x-5 mx-5">
        <div className="flex justify-center items-center">
          <IoMdBicycle className="w-20 h-20 text-[#001731]" />
        </div>
        <Tabs
          radius="lg"
          aria-label="Options"
          isVertical={isVertical}
          className="grid grid-flow-col pt-5 pb-10 w-full border-b-1 border-black"
          variant="light"
        >
          <Tab
            className="h-[5vh] justify-start"
            key="carrera"
            title={
              <div className="flex items-center gap-2">
                  <Image height={20} alt="Carrera" src="/Alarm.png"/>
                <p className="">Carrera</p>
              </div>
            }
          ></Tab>
          <Tab
            key="equipos"
            className="h-[5vh] justify-start"
            title={
              <div className="flex items-center gap-2">
                <Image height={10} alt="Equipos" src="/Users_Group.png" />
                Equipos
              </div>
            }
          ></Tab>
          <Tab
            key="estadisticas"
            className="h-[5vh] justify-start"
            title={
              <div className="flex items-center gap-2">
                <Image height={10} alt="Estadisticas" src="/chart.png" />
                Estadisticas
              </div>
            }
          ></Tab>
        </Tabs>
        <div className="flex items-center mt-5">
          <Button
            color="primary"
            variant="light"
            className="w-full flex text-black justify-start items-center h-[5vh]"
          >
            <div className="flex items-center">
              <Image height={10} alt="Cerrar sesion" src="/LogOut.png" />
              Cerrar Sesión
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};
