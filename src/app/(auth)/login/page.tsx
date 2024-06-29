'use client';
import { Input, Button } from "@nextui-org/react";
import Image from "next/image";
import { EyeFilledIcon } from "@/components/reusable/register/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/reusable/register/EyeSlashFilledIcon";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import React, { FormEvent, useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { rol } from "@/utils/constantes/data";

export default function Login() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rol: ""
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { email, password, rol } = formData;
      console.log(formData);
      // const authResponse = await axios.post(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/auth/login`, {
      //   rol,
      //   identifier: email,
      //   password,
      // });
      // localStorage.setItem('jwt', authResponse.data.jwt);
      // router.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="w-full grid md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className="hidden justify-center items-center md:flex">
          <Image
            className="object-cover rounded-default"
            width={"700"}
            height={"700"}
            src="/ciclista.jpg"
            alt="logo"
            loading="lazy"
          />
        </div>
        <div className="flex w-full flex-col gap-4 p-10 my-auto">
          <h1 className="text-center text-secondary text-3xl font-semibold">INGRESO</h1>
          <div className="flex flex-col gap-4 p-5">
            <Autocomplete
              label="Rol"
              color="secondary"
              variant="underlined"
              size="md"
              radius="md"
              isRequired={true}
              placeholder="Seleccione un Rol"
              defaultItems={rol}
              onSelectionChange={(value) => setFormData(prev => ({ ...prev, rol: value as string }))}
              classNames={{
                base: "font-bold",
              }}
            >
              {rol.map((option) => (
                <AutocompleteItem key={option.value} value={option.label} classNames={{ selectedIcon: "text-secondary" }}>
                  {option.label}
                </AutocompleteItem>
              ))}
            </Autocomplete>
            <Input isRequired={true} type="email" variant="underlined" label="Email" name="email" value={formData.email} onChange={handleChange} placeholder="tucorreo@ejemplo.com"
              classNames={{
                base: "font-bold",
              }} />
            <Input isRequired={true} variant="underlined" label="Password" placeholder="******" name="password" value={formData.password} onChange={handleChange}
              classNames={{
                base: "font-bold",
              }}
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? <EyeSlashFilledIcon className="text-2xl text-default-400" /> : <EyeFilledIcon className="text-2xl text-default-400" />}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
            <div className="flex flex-col items-center mt-4">
              <Button color="primary" radius="full" variant="ghost" type="submit" className="w-44 mb-2 ">Ingresar</Button>
              <p className="text-sm">
                ¿No tienes cuenta?{" "}
                <Link href="/registro" className="text-primary underline font-bold">Registrate</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}