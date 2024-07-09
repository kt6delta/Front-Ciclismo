"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Ganador from "@/components/simulation/ganador";

export default function ganar() {
  const router = useRouter();

  return (
    <>
      <Ganador />
    </>
  );
}
