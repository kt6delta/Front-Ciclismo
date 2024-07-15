"use client";
import React, { useEffect, useState } from "react";
import Imagen from "@/components/simulation/Imagen";
import { IoIosBicycle } from "react-icons/io";
import { Title } from "@/components/reusable/title";
export default function Progreso() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    import('progressbar.js').then(ProgressBar => {
      var bar = new ProgressBar.default.Path('#heart-path', {
        easing: 'easeInOut',
        duration: 10000,
        step: function (state, path, attachment) {
          if(path.value()<0.25){
            setProgress((path.value()*-1)*1.75);
          } else if(path.value()>=0.25 && path.value()<0.37){
            setProgress((path.value()-0.5)*1.75);
          }else if(path.value()>=0.37 && path.value()<0.5 ){
            setProgress((path.value()-0.5)*1.75);
          }else if(path.value()>=0.5 && path.value()<0.74){
            setProgress((path.value()-0.5)*1.75);
          }else if(path.value()>=0.74 && path.value()<=1){
            setProgress(((path.value()*-1)+1)*1.75);
          } 
        }
      });
      bar.set(0);
      bar.animate(1, {
      }, function () {
        console.log('Carrera has finished');
      });
    });
  }, []);

  let iconStyle = {
    transform: `translateX(${progress * 100}%)`
  };
  return (
    <>
      <div className="flex justify-center items-center mb-20">
        <Title mesage="CARRERA" />
      </div>
      <div className="flex justify-center items-center" style={iconStyle}>
        <IoIosBicycle className="w-12 h-12" />
      </div>
      <div className="flex justify-center items-center">
        <Imagen />
      </div>
    </>
  );
}
