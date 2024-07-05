"use client";
import React, { useState } from "react";
import { DragList } from "@/components/CardDrop/DragList";
import { Title } from "@/components/reusable/title";
import { CardWrapper } from "@/components/reusable/CardWrapper";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
} from "@nextui-org/react";
import { paises, masajista } from "@/utils/constantes/data";

export const creacionEquipo = () => {
  const [formData, setFormData] = useState({
    nacionalidad: "",
    nombre: "",
    masajista: "",
  });

  function handleChange(e: any): void {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="flex flex-col gap-5 mb-5">
        <Title
          className="text-center"
          mesage="CREACION DE EQUIPO"
        />
        <div className="grid grid-cols-2 gap-5">
        <Title
          className=""
          mesage="CICLISTAS"
        />
        <div className="flex justify-end items-center">
        <Title
          mesage="SEARCH"
        />
        </div>
        </div>
      </div>
      <div className="grid gap-x-5 gap-y-5  md:gap-x-10 lg:gap-x-14 grid-cols-2 lg:grid-cols-3 rounded-default min-w-[400px]">
        <DragList />
        <div className="col-span-2 lg:col-span-1 ">
          <div className="flex flex-col md:block">
            <Title
              className="text-center text-small md:text-small lg:text-small"
              mesage="DATOS EQUIPO"
            />
            <CardWrapper className="bg-background p-3 md:p-5 lg:p-7 rounded-default border-1 border-content1 shadow-button">
              <div className="grid grid-cols-1 gap-2">
                <Input
                  isRequired={true}
                  type="text"
                  variant="underlined"
                  label="Nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Los Best"
                  classNames={{
                    base: "font-bold",
                  }}
                />
                <Autocomplete
                  isRequired={true}
                  label="Nacionalidad"
                  color="secondary"
                  variant="underlined"
                  size="md"
                  radius="md"
                  placeholder="Seleccione un Nacionalidad"
                  defaultItems={paises}
                  defaultSelectedKey={formData.nacionalidad}
                  onSelectionChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      nacionalidad: value as string,
                    }))
                  }
                  classNames={{
                    base: "font-bold",
                  }}
                >
                  {paises.map((option) => (
                    <AutocompleteItem
                      key={option.value}
                      value={option.label}
                      classNames={{
                        selectedIcon: "text-secondary",
                      }}
                    >
                      {option.label}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
                <Autocomplete
                  isRequired={true}
                  label="Masajista"
                  color="secondary"
                  variant="underlined"
                  size="md"
                  radius="md"
                  placeholder="Seleccione un Masajista"
                  defaultItems={masajista}
                  defaultSelectedKey={formData.masajista}
                  onSelectionChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      masajista: value as string,
                    }))
                  }
                  classNames={{
                    base: "font-bold",
                  }}
                >
                  {masajista.map((option) => (
                    <AutocompleteItem
                      key={option.value}
                      value={option.label}
                      classNames={{
                        selectedIcon: "text-secondary",
                      }}
                    >
                      {option.label}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
              </div>
            </CardWrapper>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-5">
        <Button
          color="secondary"
          variant="solid"
          type="submit"
          radius="full"
          className="w-1/3 min-w-32 mb-2 text-white"
        >
          Crear
        </Button>
      </div>
    </>
  );
};
export default creacionEquipo;
