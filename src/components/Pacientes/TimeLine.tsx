"use client";

import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { MdWork } from "react-icons/md";

export default function TimeLine() {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    let experiencia = ['asd', 'asd', 'qwe', 'tyu', 'ert', 'asd'];

    return (
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <div className="mb-10">
            <h1 className='text-3xl font-bold text-center'>Plan Intervencion</h1>
            <p className='text-center'>Nombre y Tarjeta Identi</p>
            </div>
            <VerticalTimeline lineColor="black">
                {
                    experiencia.map((index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                visible={inView}
                                date="2021 - Presente"
                                icon={<MdWork />}
                            >
                                <h3 className="font-semibold capitalize">Tema:Depresion</h3>
                                <p className="font-normal !mt-0">Numero de sesiones: 4</p>
                                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                    Soy una descripcion
                                </p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    );
}