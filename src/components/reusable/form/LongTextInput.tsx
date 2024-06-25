"use client"
import { useRef } from 'react'
import React from "react";
import { Textarea } from "@nextui-org/react";
import type { Question } from "@/utils/interfaces/types";

export function Longtext({ 
    stateUpdater,
    question, 
    value,
    maxLength, 
    placeholder,
    index,
    isError
}: Question) {

    const ref = useRef<HTMLLIElement>(null);

    if(isError && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const valueAsString = value as string;

    let excedChar = valueAsString.length >= maxLength!;
    let nearLimit = maxLength! - valueAsString.length <= 20;

    const handleValueChange = (newValue: string) => {
        if (!(excedChar) || (newValue.length < valueAsString.length)) {
            stateUpdater!(newValue, index!);
        }
    };
    return (
        <li ref={ref}>
            <Textarea
                label={question}
                variant="bordered"
                labelPlacement="outside"
                placeholder={placeholder}
                errorMessage={excedChar ? `La descripcion no puede exceder los ${maxLength} caracteres` : ""}
                value={valueAsString}
                onValueChange={handleValueChange}
                classNames={{
                    base: 'mb-2',
                    label: `text-lg font-bold mb-4 group-data-\[filled-within\=true\]\:text-secondary ${isError ? 'text-red-400' : 'text-secondary'}`,
                    input: "font-secondary placeholder:text-secondary-300"
                }}
            />
            <p className={`text-end text-md pr-1 ${nearLimit ? 'text-danger' : 'text-secondary'}`}>{`${valueAsString.length}/${maxLength}`}</p>
        </li>
    );
}