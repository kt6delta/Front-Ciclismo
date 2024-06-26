'use client';
import { Input, Button } from "@nextui-org/react";
import Image from "next/image";
import { EyeFilledIcon } from "@/components/reusable/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/reusable/EyeSlashFilledIcon";
import React, { FormEvent, useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation'

export default function Login() {
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
      <form className="w-full grid md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className="flex justify-center items-center">
          <Image
            className="object-cover rounded-default"
            width={"700"}
            height={"700"}
            src="/ciclista.jpg"
            alt="logo consultorio psicologico"
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="flex w-full flex-col md:flex-nowrap gap-4 p-10">
          <h1 className="text-center text-primary text-xl">HOLA!<br />
            <span className="font-semibold">TU CAMINO INICIA HOY</span>
          </h1>
          <div className="md:flex-nowrap 
          p-5 flex w-full flex-col gap-4">
            <h2 className="text-center"><span className="text-primary text-xl">Ingresa</span> tu cuenta</h2>
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
            <div className="flex justify-center align-middle">
              <Button color="primary" variant="ghost" type="submit" >
                Ingresar
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}