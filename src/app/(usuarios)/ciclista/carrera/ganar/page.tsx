"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Ganador from "@/components/simulation/ganador";
import InformacionEquipo from "@/components/reusable/informacionEquipo";

export default function Ganar() {
  const router = useRouter();

  return (
    <>
      <InformacionEquipo />
    </>
  );
}
