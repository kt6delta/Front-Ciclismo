'use client'

import { useRef } from 'react'
import { Input } from "@nextui-org/react"
import type { Question } from "@/utils/interfaces/types"

export function DoubleInput({
    question,
    index,
    value,
    stateUpdater,
    firstInputType,
    secondInputType,
    firstLabel,
    secondLabel,
    firstPlaceholder,
    secondPlaceholder,
    firstDescription,
    secondDescription,
    allowMultipleAnswers,
    isError
}: Question) {

    const ref = useRef<HTMLLIElement>(null);

    if(isError && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const valueAsArray = value as { [key: string]: string }[];

    const addNewExtraComponent = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault()
        const newFormvalue = [...valueAsArray, { [firstLabel as string]: '', [secondLabel as string]: '' }]
        stateUpdater!(newFormvalue, index!)
    }

    const removeDesplegableComponent = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (valueAsArray.length > 1) {
            const newFormValue = valueAsArray.slice(0, valueAsArray.length - 1)
            stateUpdater!(newFormValue, index!)
        }

    }

    const handleChange = (newValue: string, label: string, valueIndex: number = 0) => {

        const newFormValue = valueAsArray;
        newFormValue[valueIndex] = { ...newFormValue[valueIndex], [label]: newValue };
        stateUpdater!(newFormValue, index!);

    }


    return (
        <li ref={ref}>
            <fieldset>
                <legend className={`text-lg font-bold mb-6 ${isError ? 'text-red-400' : 'text-secondary'}`}>{question}</legend>
                <div className="flex flex-col gap-xs mb-4">
                    <Input
                        variant='flat'
                        color='secondary'
                        type={firstInputType}
                        label={firstLabel}
                        labelPlacement="outside-left"
                        name={firstLabel}
                        description={firstDescription}
                        placeholder={firstPlaceholder}
                        value={valueAsArray[0][firstLabel!]}
                        onValueChange={(newValue) => handleChange(newValue, firstLabel!)}
                        className="w-full"
                        classNames={{
                            base: 'text-secondary flex items-center',
                            mainWrapper: 'w-full',
                            inputWrapper: 'bg-background border-2 border-secondary-300 rounded-default',
                            description: 'text-secondary-600 font-secondary text-md mb-6',
                            label: "text-md font-medium",
                            input: "font-secondary  pl-4 placeholder:text-secondary-300 w-full"
                        }}
                    />
                    <Input
                        variant='flat'
                        color='secondary'
                        type={secondInputType}
                        label={secondLabel}
                        labelPlacement="outside-left"
                        name={secondLabel}
                        description={secondDescription}
                        placeholder={secondPlaceholder}
                        value={valueAsArray[0][secondLabel!]}
                        onValueChange={(newValue) => handleChange(newValue, secondLabel!)}
                        className="w-full"
                        classNames={{
                            base: 'text-secondary flex items-center',
                            mainWrapper: 'w-full',
                            inputWrapper: 'bg-background border-2 border-secondary-300 rounded-default',
                            description: 'text-secondary-600 font-secondary text-md mb-6',
                            label: "text-md font-medium",
                            input: "font-secondary  pl-4 placeholder:text-secondary-300 w-full"
                        }}
                    />
                </div>

                {valueAsArray.length > 1 && valueAsArray.map((element, index) => {
                    if(index === 0) {
                        return null
                    } else {
                        return (
                            <div key={index} className="flex flex-col gap-xs mb-4">
                        <Input
                            isRequired
                            variant='flat'
                            color='secondary'
                            type={firstInputType}
                            label={firstLabel}
                            labelPlacement="outside-left"
                            name={firstLabel}
                            description={firstDescription}
                            placeholder={firstPlaceholder}
                            value={valueAsArray[index][firstLabel!]}
                            onValueChange={(newValue) => handleChange(newValue, firstLabel!, index)}
                            className="w-full"
                            classNames={{
                                base: 'text-secondary flex items-center',
                                mainWrapper: 'w-full',
                                inputWrapper: 'bg-background border-2 border-secondary-300 rounded-default',
                                description: 'text-secondary-600 font-secondary text-md mb-6',
                                label: "text-md font-medium",
                                input: "font-secondary  pl-4 placeholder:text-secondary-300 w-full"
                            }}
                        />
                        <Input
                            isRequired
                            variant='flat'
                            color='secondary'
                            type={secondInputType}
                            label={secondLabel}
                            labelPlacement="outside-left"
                            name={secondLabel}
                            description={secondDescription}
                            placeholder={secondPlaceholder}
                            value={valueAsArray[index][secondLabel!]}
                            onValueChange={(newValue) => handleChange(newValue, secondLabel!, index)}
                            className="w-full"
                            classNames={{
                                base: 'text-secondary flex items-center',
                                mainWrapper: 'w-full',
                                inputWrapper: 'bg-background border-2 border-secondary-300 rounded-default',
                                description: 'text-secondary-600 font-secondary text-md mb-6',
                                label: "text-md font-medium",
                                input: "font-secondary  pl-4 placeholder:text-secondary-300 w-full"
                            }}
                        />
                    </div>
                        )
                    }

                })}
            </fieldset>

            {allowMultipleAnswers && (
                <div className="w-full flex justify-between px-md text-secondary mb-xl">
                    <button
                        className={`flex justify-between gap-1 items-center font-medium text-md text-background bg-danger rounded-default px-4 p-1 
                        ${valueAsArray.length === 1 && 'bg-secondary-300 cursor-default transition-all ease-in-out duration-300'}`}
                        onClick={removeDesplegableComponent}
                    >
                        <span>Remover</span>
                    </button>
                    <button
                        className="flex justify-between gap-1 items-center font-medium text-md text-background bg-primary rounded-default px-4 p-1"
                        onClick={addNewExtraComponent}
                    >
                        <span>Agregar</span>
                    </button>
                </div>
            )}
        </li>
    )
}