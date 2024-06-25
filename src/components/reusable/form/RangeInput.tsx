"use client"
import React from "react";
import { useRef } from 'react'
import { Slider } from "@nextui-org/react";
import type { Question } from "@/utils/interfaces/types";

export function Range({
  question,
  stateUpdater,
  index,
  marks,
  showSteps,
  maxValue,
  minValue,
  defaultValue,
  hideValue,
  step,
  formatOptions,
  isError
}: Question) {

  const ref = useRef<HTMLLIElement>(null);

  if (isError && ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const [value, setValue] = React.useState<number | number[]>(defaultValue || 0);

  const handlechange = (newValue: number | number[]) => {

    stateUpdater!(newValue, index!);
    setValue(newValue);

    if (marks && marks.length > 0) {
      const selectedMark = marks.find(mark => mark.value === newValue);
      stateUpdater!(selectedMark!.label, index!)
    }
  };

  let stepCalculated
  if (marks && marks.length > 0) {
    stepCalculated = maxValue! / (marks!.length);
  } else {
    stepCalculated = step;
  }

  return (
    <li ref={ref}>
      <Slider
        aria-label="Posicion"
        label={question}
        color="primary"
        value={Array.isArray(value) ? value : Math.floor(value)}
        onChange={newValue => handlechange(newValue)}
        step={stepCalculated}
        maxValue={maxValue}
        minValue={minValue}
        defaultValue={defaultValue}
        marks={marks}
        showSteps={showSteps}
        hideValue={hideValue}
        formatOptions={formatOptions}
        className="w-full"
        classNames={{
          label: `font-bold text-lg mb-4 ${isError ? 'text-red-400' : 'text-secondary'}`,
          labelWrapper: "flex flex-col items-start mb-2",
          mark: "font-secondary text-secondary text-sm font-bold",
          value: "text-secondary font-secondary font-bold pl-2 self-end",
        }}
      />
    </li>

  );
}