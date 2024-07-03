"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FooterPage } from '@/components/reusable/user/FooterPage';
import { Header } from '@/components/reusable/user/Header';
import { Card, CardBody } from "@nextui-org/react";
import { TableList } from '@/components/reusable/table/TableList';

import { CardUser } from '@/components/reusable/cardUser';

// import { toast } from "react-toastify";
import axios from "axios";


export default function HomePage() {
  const router = useRouter();
	//const notify = () => toast.error("Oops! Algo salio mal!");
	// const notificacion = () =>
	// 	toast.success("Se envio exitosamente la informacion");
	// const notify = () => toast.info("Informacion");
  return (
    <div className="flex justify-center items-center ">
      <Card className="w-[85%] rounded-2xl  h-[85vh] mt-20">
        <CardBody className='p-0'>
          <Header />

          
         <TableList  
         />
          
          
        
          <FooterPage />
        </CardBody>
      </Card>

    </div>
  );
}
