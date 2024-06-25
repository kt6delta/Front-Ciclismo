'use client'

import { useRef } from 'react'
import { ShortText } from "@/components/reusable/form/ShortTextInput";

import type { Question } from "@/utils/interfaces/types";

export function SingleChoice({
    question,
    stateUpdater,
    index,
    value,
    extraValue,
    description,
    chosingOptions,
    optionsToExtraAnswer,
    extraComponents,
    allowMultipleExtraAnswer,
    isError
}: Question) {

    const ref = useRef<HTMLLIElement>(null);

    if (isError && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const handleClick = (option: string) => {
        stateUpdater!(option, index!)
    }

    return (
        <li
            className='flex flex-col gap-lg
            md:gap-xl'
            ref={ref}
        >
            <fieldset>
                <legend className={`text-lg font-bold mb-3 ${isError ? 'text-red-400' : 'text-secondary'}`}>{question}</legend>
                <p className="text-secondary-600 font-secondary text-md mb-4">{description}</p>
                <div className={`flex flex-col gap-xs w-full }
                        md:flex md:gap-xs
                        `}
                >
                    {chosingOptions!.map((option, indexOption) => (
                        <div
                            key={indexOption}
                        >
                            <label
                                key={indexOption}
                                htmlFor={`${question}-${indexOption}`}
                                tabIndex={0}
                                className={`flex items-center justify-center text-lg text-secondary py-3 px-4 border-2 border-secondary-300 rounded-default cursor-pointer w-full text-center 
                                    md:py-2 md:px-3 
                                    transition-all ease-in-out duration-300 
                                    ${value === option ? 'bg-primary' : ''} 
                                    outline-secondary`}
                                onKeyDown={(event) => event.key === 'Enter' && handleClick(option)}>
                                {option}
                                <input
                                    type='checkbox'
                                    hidden
                                    id={`${question}-${indexOption}`}
                                    name={question}
                                    value={option}
                                    onChange={() => handleClick(option)}
                                />
                            </label>

                            {/* showing this when the clicked option has extra components to show */}
                            {value === option && optionsToExtraAnswer?.includes(option) && ( // The clicked option require extra answer
                                <div className="mt-4">
                                    <div className={`mb-sm flex flex-col gap-md ${allowMultipleExtraAnswer ? '' : 'mb-xl'}`}>
                                        {extraComponents?.map((extraComponent) => {
                                            if (option === extraComponent.isExtraComponentFor) { // If the current option has extraComponents, render them
                                                return (
                                                    <ShortText
                                                        key={extraComponent.questionID + extraComponent.question}
                                                        {...extraComponent}
                                                        index={index}
                                                        isExtraComponent
                                                        stateUpdater={stateUpdater}
                                                        value={extraValue!}
                                                    />
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </fieldset>
        </li>
    )
}



