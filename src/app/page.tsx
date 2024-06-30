"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FooterPage } from '@/components/reusable/user/FooterPage';
import { Header } from '@/components/reusable/user/Header';
import { Card, CardBody } from "@nextui-org/react";
import { TableList } from '@/components/reusable/table/TableList';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center ">
      <Card className="w-[85%] rounded-2xl bg-gray-300 h-[80vh] mt-20">
        <CardBody className='p-0'>
          <Header />
          <TableList />
          <FooterPage />
        </CardBody>
      </Card>
    </div>
  );
}