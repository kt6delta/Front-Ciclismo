'use client';
import React, { useRef } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

import type { Question } from "@/utils/interfaces/types";

export function SearchSelect({
    question,
    stateUpdater,
    index,
    selectOptions = [],
    placeholder = "",
    required = false,
    defaultSelectedKeys = "",
    isError,
}: Question) {
    const ref = useRef<HTMLLIElement>(null);

    if (isError && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const handleSelectionChange = (newValues: React.Key | null) => {
        let toString: string = newValues !== null ? String(newValues) : "";
        stateUpdater!(toString, index!);
    }

    return (
        <li ref={ref}>
            <label className={`block text-lg font-bold mb-4  ${isError ? 'text-red-400' : 'text-secondary'}`}
            >{question}
            </label>
            <div>
                <Autocomplete
                    color="primary"
                    variant="faded"
                    size="md"
                    radius="md"
                    aria-label="search select options"
                    isRequired={required}
                    placeholder={placeholder}
                    defaultSelectedKey={defaultSelectedKeys as string}
                    defaultItems={selectOptions.map((option) => option.name)}
                    onSelectionChange={handleSelectionChange}
                >
                    {
                        selectOptions.map((option) => (
                            <AutocompleteItem key={option.isoCode} value={option.name}
                                classNames={{
                                    selectedIcon: "text-secondary",
                                }}>
                                {option.name}
                            </AutocompleteItem>
                        ))
                    }
                </Autocomplete>
            </div>
        </li>
    );
}