'use client';

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter();

  const navigateToPage1 = () => {
    router.push('/login'); // Reemplaza '/tu-destino' con la ruta de tu página destino
  };
  const navigateToPage2 = () => {
    router.push('/registro'); // Reemplaza '/tu-destino' con la ruta de tu página destino
  };
  return (
    <>
    <Button onClick={navigateToPage1}>login</Button>
      <Button onClick={navigateToPage2}>regis</Button>
    </>
  );
}