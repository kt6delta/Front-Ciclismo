'use client'

import { useRef } from 'react'
import { Input } from "@nextui-org/react"
import type { Question } from "@/utils/interfaces/types"

export function ShortText({
    stateUpdater,
    index,
    value,
    question,
    inputType,
    isExtraComponent,
    placeholder,
    description,
    isError,
}: Question) {

    const ref = useRef<HTMLLIElement>(null);

    if (isError && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const changeHandler = (newValue: string) => {
        const numberValue = parseFloat(newValue);
        if (isNaN(numberValue)) {
            stateUpdater!(newValue, index!, isExtraComponent); // it's a string
        } else {
            stateUpdater!(numberValue, index!, isExtraComponent); // it's a number
        }
    };

    return (
        <li ref={ref}>
            <label
                htmlFor={question}
                className={`block text-lg font-bold mb-4
                    ${isExtraComponent ? 'font-medium text-lg' : ''}
                    ${isError ? 'text-red-500' : 'text-secondary'}
                    `}
            >{question}</label>
            <Input
                isRequired={isExtraComponent}
                variant='underlined'
                color='secondary'
                type={inputType}
                name={question}
                id={question}
                description={description}
                placeholder={placeholder}
                value={value as string}
                onValueChange={changeHandler}
                className={`w-full`}
                classNames={{
                    base: 'text-secondary',
                    description: 'text-secondary-600 font-secondary text-md',
                    input: "font-secondary pl-4 placeholder:text-secondary-300"
                }}
            />
        </li>
    )
}



