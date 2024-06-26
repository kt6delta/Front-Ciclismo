'use client';
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "@/components/reusable/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/reusable/EyeSlashFilledIcon";
import React, { FormEvent, useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation'

export default function Registro() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const authResponse = await axios.post(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/auth/local`, {
        identifier: email,
        password: password,
      });
      localStorage.setItem('jwt', authResponse.data.jwt);
      let userResponse = await axios.get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/rol-user/${authResponse.data.user.id}`, {
        headers: {
          Authorization: `Bearer ${authResponse.data.jwt}`,
        },
      });
      router.push(`/paciente/${authResponse.data.user.id}`); //id de la tabla user
      if (userResponse.data.role === 'psicologo') {
        router.push(`/psicologo/${authResponse.data.user.id}`); //id de la tabla user
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="w-full p-10 grid gap-4" onSubmit={handleSubmit}>
        <h1 className="text-center text-primary text-xl">HOLA!<br />
          <span className="font-semibold">TU CAMINO INICIA HOY</span>
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-flow-cols-3 gap-4"> 
          {/* aqui ingres los inputs */}
          <div className="flex w-full flex-col md:flex-nowrap gap-4">
            <div className="md:flex-nowrap 
          p-5 flex w-full flex-col gap-4">
              <Input type="email" variant="underlined" label="Email"
                value={email}
                onValueChange={setEmail}
              />
              <Input variant="underlined" label="Password"
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                value={password}
                onValueChange={setPassword}
              />
            </div>
          </div>
          <div className="flex w-full flex-col md:flex-nowrap gap-4">
            <div className="md:flex-nowrap 
          p-5 flex w-full flex-col gap-4">
              <Input type="email" variant="underlined" label="Email"
                value={email}
                onValueChange={setEmail}
              />
              <Input variant="underlined" label="Password"
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                value={password}
                onValueChange={setPassword}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center align-middle">
          <Button color="secondary" variant="ghost" type="submit" >
            Ingresar
          </Button>
        </div>
      </form>
    </>
  );
}