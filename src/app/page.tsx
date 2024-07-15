"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FooterPage } from '@/components/reusable/user/FooterPage';
import { Header } from '@/components/reusable/user/Header';
import { Card, CardBody } from "@nextui-org/react";
import Progreso from '@/components/simulation/Progreso';

import { MenuAdmin } from '@/components/reusable/admin/MenuAdmin';


// import { toast } from "react-toastify";
import axios from "axios";

export default function HomePage() {
  const router = useRouter();
  // const notify = () => toast.error("Oops! Algo salio mal!");
  // const notificacion = () =>
  //   toast.success("Se envio exitosamente la informacion");
  // const notify = () => toast.info("Informacion");
  return (
    <div className="flex justify-center items-center ">
      <Progreso />
    </div>
  );
}
