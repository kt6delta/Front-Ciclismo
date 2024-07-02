import React from 'react';
import { User } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

type CardUserProps = {
    nombre: string;
    especialidad: string;
    tiempoAcomulado: string;
    genero: string;
    contextura: string;
};

export const CardUser = ({ nombre, especialidad, tiempoAcomulado, genero, contextura }: CardUserProps) => {
    return (
        <div className='p-2'>
            <Card className="py-2 w-96 min-h-24 h-24 flex flex-row items-center bg-primary-100">
                <div className="flex-shrink-0 p-4">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-full"
                        src="../../../avatar.png"
                        width={80}
                        height={80}
                    />
                </div>
                <div className="p-0 pl-1 flex flex-col justify-center min-w-40 ">
                    <p className="font-bold text-large text-xl">{nombre}</p>
                    <small className="text-default-700 mt-1">{especialidad}</small>
                    <small className="text-default-700">{tiempoAcomulado}</small>

                </div>
                <div className="p-0 flex flex-col justify-start">
                    <small className="text-default-700">{genero}</small>
                    <small className="text-default-700">{contextura}</small>
                </div>
            </Card>

        </div>
    );
}
