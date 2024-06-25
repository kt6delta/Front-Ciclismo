"use client";
import React, { useEffect, useRef } from 'react';
import * as ECT from '@whoicd/icd11ect';
import '@whoicd/icd11ect/style.css';
import { ISelectedEntity } from '@/utils/interfaces/types';

const ECTReactComponent = () => {
    const iNo = useRef(1);

    useEffect(() => {
        const settings = {
            apiServerUrl: 'https://icd11restapi-developer-test.azurewebsites.net',
            autoBind: false,
        };
        const callbacks = {
            selectedEntityFunction: (selectedEntity: ISelectedEntity) => {
                alert('ICD-11 code selected: ' + selectedEntity.code);
                ECT.Handler.clear(iNo.current);
            },
        };
        ECT.Handler.configure(settings, callbacks);
        ECT.Handler.bind(iNo.current);
    }, []);

    return (
        <div>
            <h1>CIE-11</h1>
            Escriba para empezar a buscar:
            <input
                type="text"
                className="ctw-input"
                autoComplete="off"
                data-ctw-ino={iNo.current}
            />
            <div className="ctw-window" data-ctw-ino={iNo.current}></div>
        </div>
    );
};

export default ECTReactComponent;