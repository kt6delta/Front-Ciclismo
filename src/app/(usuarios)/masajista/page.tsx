"use client";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Autocomplete,
  AutocompleteItem,
  Avatar,
  Button,
  Input,
} from "@nextui-org/react";
import {
  contexturas,
  countries,
  especialidad,
  sexos,
  acciones,
} from "@/utils/constantes/data";
import axios from "axios";
import { TimeInput } from "@nextui-org/date-input";
interface IForm {
  handleSubmit(formData: any): Promise<void>;
}
class Ciclista implements IForm {
  router: any;
  constructor(router: any) {
    this.router = router;
  }
  async handleSubmit(formData: any): Promise<void> {
    const { rol, nombre, cedula, sexo, contextura, especialidad, email,acciones,tiempoAcumula} =
      formData;
      console.log(formData);
  }
}
class MasajistaC implements IForm {
  router: any;
  constructor(router: any) {
    this.router = router;
  }
  async handleSubmit(formData: any): Promise<void> {
    const { rol, nombre, cedula, sexo, email, experiencia } = formData;
    console.log(formData);
  }
}
class Director implements IForm {
  router: any;
  constructor(router: any) {
    this.router = router;
  }
  async handleSubmit(formData: any): Promise<void> {
    const { rol, nombre, cedula, sexo, email, nacionalidad } = formData;
    console.log(formData);
    // this.router.push('/director');
  }
}

export default function Masajista() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    rol: "1",
    email: "",
    nombre: "",
    cedula: "",
    sexo: "",
    contextura: "",
    especialidad: "",
    experiencia: "",
    nacionalidad: "",
    tiempoAcumula: null,
    acciones: "",
  });
  const [form, setForm] = useState<IForm | null>(null);

  useEffect(() => {
    // Cambiar la estrategia según el rol
    switch (formData.rol) {
      case "1":
        setForm(new Ciclista(router));
        break;
      case "2":
        setForm(new MasajistaC(router));
        break;
      case "3":
        setForm(new Director(router));
        break;
      default:
        setForm(null);
    }
  }, [formData.rol, router]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form) {
      await form.handleSubmit(formData);
    } else {
      console.log("rol no valido");
    }
  };
  const handleChange = (e: any, value?: string) => {
    if (value !== undefined) {
      setFormData((prevState) => ({
        ...prevState,
        sexo: value,
      }));
    } else {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <div className="relative z-50 mb-0 md:mb-8 lg:mb-12">
        <h1 className="absolute left-0 text-secondary text-base md:text-xl xl:text-2xl font-bold px-[60px]">
          MASAJISTA
        </h1>
        <div className="absolute -top-20 left-0 right-0">
          <div className="hidden justify-center items-center sm:flex">
            <Avatar
              isBordered
              color="danger"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40"
            />
          </div>
        </div>
        <h1 className="absolute right-0 text-secondary text-base md:text-xl xl:text-2xl font-bold text-right px-[60px]">
          El TEAM
        </h1>
      </div>
      <form className="w-full p-10 grid my-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <Button
            color="secondary"
            variant="solid"
            type="submit"
            radius="full"
            className="w-1/3 min-w-32 mb-2 text-white"
          >
            Editar Perfil
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 p-5">
          {/* inputs */}
          <Input
            isRequired={true}
            type="email"
            variant="underlined"
            label="Correo"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
            classNames={{
              base: "font-bold",
            }}
          />
          <Input
            isRequired={true}
            type="text"
            variant="underlined"
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Juan Diego"
            classNames={{
              base: "font-bold",
            }}
          />
          <Input
            isRequired={true}
            variant="underlined"
            label="cedula"
            placeholder="1111111111"
            name="cedula"
            value={formData.cedula}
            onChange={handleChange}
            type="number"
            classNames={{
              base: "font-bold",
            }}
          />
          <div
            className={`flex flex-col gap-xs w-full
                          md:flex md:gap-xs`}
          >
            <p className="tracking-tight text-foreground-600 font-bold ml-1 text-sm pe-2 max-w-full text-ellipsis">
              Sexo <span className="text-danger">*</span>
            </p>
            <div
              className={`flex justify-center w-full
                          md:flex md:gap-xs`}
            >
              {sexos!.map((option, indexOption) => (
                <div key={indexOption} className="w-1/2 mx-4">
                  <label
                    key={indexOption}
                    htmlFor={`${indexOption}`}
                    tabIndex={0}
                    className={`flex items-center justify-center text-small text-secondary font-light py-3 px-4 border-1 border-secondary-300 rounded-default cursor-pointer w-full text-center 
                      transition-all ease-in-out duration-300 
                      ${formData.sexo === option ? "bg-primary" : ""} 
                      outline-secondary`}
                    onKeyDown={(event) =>
                      event.key === "Enter" && handleChange(undefined, option)
                    }
                  >
                    {option}
                    <input
                      type="radio"
                      hidden
                      id={`${indexOption}`}
                      name="sexo"
                      value={option}
                      onChange={() => handleChange(undefined, option)}
                      checked={formData.sexo === option}
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          {(() => {
            if (formData.rol === "1") {
              return (
                <>
                  {/* Componentes para ciclista */}
                  <Autocomplete
                    label="Especialidad"
                    color="secondary"
                    variant="underlined"
                    size="md"
                    radius="md"
                    placeholder="Seleccione una Especialidad"
                    defaultItems={especialidad}
                    onSelectionChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        especialidad: value as string,
                      }))
                    }
                    classNames={{
                      base: "font-bold",
                    }}
                  >
                    {especialidad.map((option) => (
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
                    label="Contextura"
                    color="secondary"
                    variant="underlined"
                    size="md"
                    radius="md"
                    placeholder="Seleccione un Rol"
                    defaultItems={contexturas}
                    onSelectionChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        contextura: value as string,
                      }))
                    }
                    classNames={{
                      base: "font-bold",
                    }}
                  >
                    {contexturas.map((option) => (
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
                    label="Acciones"
                    color="secondary"
                    variant="underlined"
                    size="md"
                    radius="md"
                    placeholder="Seleccione un Rol"
                    defaultItems={acciones}
                    onSelectionChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        acciones: value as string,
                      }))
                    }
                    classNames={{
                      base: "font-bold",
                    }}
                  >
                    {acciones.map((option) => (
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
                  <TimeInput
                    value={formData.tiempoAcumula}
                    onChange={handleChange}
                    granularity="second"
                    label="Tiempo Acumulado"
                    hourCycle={24}
                    hideTimeZone={true}
                    variant="underlined"
                    classNames={{
                      label: "text-secondary font-bold",
                      segment: "",
                    }}
                  />
                </>
              );
            } else if (formData.rol === "2") {
              return (
                <Input
                  isRequired={true}
                  variant="underlined"
                  label="Experiencia"
                  placeholder="20 años"
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleChange}
                  type="number"
                  classNames={{
                    base: "font-bold",
                  }}
                />
              );
            } else if (formData.rol === "3") {
              return (
                <Autocomplete
                  label="Nacionalidad"
                  color="secondary"
                  variant="underlined"
                  size="md"
                  radius="md"
                  placeholder="Seleccione un Nacionalidad"
                  defaultItems={countries}
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
                  {countries.map((option: string) => (
                    <AutocompleteItem
                      key={option}
                      value={option}
                      classNames={{
                        selectedIcon: "text-secondary",
                      }}
                    >
                      {option}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
              );
            }
          })()}
        </div>
      </form>
    </>
  );
}
