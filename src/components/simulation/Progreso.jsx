"use client";
import React, { useEffect } from "react";
import Imagen from "@/components/simulation/Imagen";
import { IoIosBicycle } from "react-icons/io";
export default function Progreso() {
  useEffect(() => {
    import('progressbar.js').then(ProgressBar => {
      var bar = new ProgressBar.default.Path('#heart-path', {
        easing: 'easeInOut',
        duration: 10000,
        step: function(state, path, attachment) {
          console.log('Carrera en progreso:'+state);
          <IoIosBicycle className="w-12 h-12" />
      }
      });
      bar.set(0);
      bar.animate(1, {
      }, function () {
        console.log('Carrera has finished');
      });
    });
  }, []);
  return (
    <>
      <div className="flex justify-center items-center">
        <Imagen />
      </div>
    </>
  );
}
