'use client';

import React, { useRef } from "react";
import { Select, SelectItem, Selection } from "@nextui-org/react";

import type { Question } from "@/utils/interfaces/types";
import { ShortText } from "./ShortTextInput";

export function MultipleSelect({
    question,
    stateUpdater,
    index,
    value,
    extraValue,
    maxAnswers,
    chosingOptions,
    placeholder,
    extraComponents,
    optionsToExtraAnswer,
    isError
}: Question) {


    const ref = useRef<HTMLDivElement>(null);

    if (isError && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const handleSelectionChange = (newValues: Selection) => {
        const newValuesArray = Array.from(newValues);
        if (maxAnswers === undefined || newValuesArray.length <= maxAnswers) {
            stateUpdater!(newValuesArray.map(String), index!);
        }
    };

    return (
        <div
            ref={ref}
        >
            <label
                className={`block text-lg font-bold mb-4 ${isError ? 'text-red-400' : 'text-secondary'}`}
            >{question}
            </label>
            {!!maxAnswers && (
                <p
                    className="font-secondary text-secondary text-md mb-2 flex justify-end"
                >
                    Máximo {maxAnswers} opciones
                </p>
            )}
            <div>
                <Select
                    color="primary"
                    variant="faded"
                    size="md"
                    radius="md"
                    aria-label="Multiple select options"
                    selectionMode="multiple"
                    placeholder={placeholder}
                    selectedKeys={new Set(value as string[] || [])}
                    onSelectionChange={handleSelectionChange}
                    defaultSelectedKeys={new Set(value as string[] || [])}
                >
                    {
                        chosingOptions!.map((option) => (
                            <SelectItem key={option} value={option}
                                classNames={{
                                    selectedIcon: "text-secondary font-secondary",
                                }}>
                                {option}
                            </SelectItem>
                        ))
                    }
                </Select>
            </div>
            {!!optionsToExtraAnswer && (value! as string[]).includes(optionsToExtraAnswer[0]) && (
                (value! as string[]).map((option) => (
                    <div key={option} className={`flex flex-col gap-md mt-3`}>
                        {
                            extraComponents?.map((extraComponent) => {
                                if (option === extraComponent.isExtraComponentFor) {
                                    return (
                                        <ShortText
                                            key={extraComponent.questionID + extraComponent.question}
                                            {...extraComponent}
                                            value={extraValue!}
                                            index={index}
                                            isExtraComponent
                                            stateUpdater={stateUpdater}
                                        />
                                    )
                                }
                            })
                        }
                    </div>
                ))
            )}
        </div>
    );
}