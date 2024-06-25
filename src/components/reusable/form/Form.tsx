'use client'
import React, { useState } from 'react';

import type { Question } from '@/utils/interfaces/types';

import { ShortText } from '@/components/reusable/form/ShortTextInput';
import { MultipleChoice } from '@/components/reusable/form/MultipleChoiceInput';
import { DoubleInput } from '@/components/reusable/form/DoubleInput';
import { Date } from '@/components/reusable/form/DateInput';
import { Longtext } from '@/components/reusable/form/LongTextInput';
import { Range } from '@/components/reusable/form/RangeInput';
import { MultipleSelect } from '@/components/reusable/form/MultipleSelect';
import { SearchSelect } from '@/components/reusable/form/SearchSelect';
import { SingleChoice } from '@/components/reusable/form/SingleChoice';

interface FormProps {
  className: string;
  handleChange: any;
  addPropHandler: any;
  handleSubmit: any;
  children: React.ReactNode;
  inputList: Question[];
  errorQuestion: string | null;
  currentSection: string;
}

const componentMap = {
  shortText: ShortText,
  multipleChoice: MultipleChoice,
  multipleSelect: MultipleSelect,
  searchSelect: SearchSelect,
  doubleInput: DoubleInput,
  date: Date,
  longText: Longtext,
  range: Range,
  singleChoice: SingleChoice
};

export const Form = ({ className, handleChange, addPropHandler, handleSubmit, children, inputList, currentSection, errorQuestion }: FormProps) => {
  //const [formValues, setFormValues] = useState({});

  // useEffect(() => {
  //   console.log(inputList)
  //   const localStorageItem = localStorage.getItem('FormResponse');
  //   if (localStorageItem) {
  //     setFormValues(JSON.parse(localStorageItem));
  //   }
  // }, []);

  return (
    <form
      className={`rounded-default shadow-card w-full p-sm-questionary mb-lg flex flex-col gap-lg:p-questionary ${className}`}
      onSubmit={handleSubmit}
    >
      <ul className='grid gap-xl md:grid-cols-2 items-center'>
        {inputList.map((question, index) => {
          let value: any;
          // const localStorageItem = typeof window !== 'undefined' ? localStorage.getItem('FormResponse') : null;
          // if (localStorageItem) {
          //   const formValue = JSON.parse(localStorageItem);
          //   value = formValue[currentSection].questions[index]?.value || question.value;
          // } else {
          //   value = question.value
          // }
          value = question.value

          // if (question.variant === 'date' && localStorageItem && value) {
          //   let fechaString: string = value.year.toString().padStart(4, '1') + '-' + value.month.toString().padStart(2, '0') + '-' + value.day.toString().padStart(2, '0');
          //   value = parseDate(fechaString);
          // }

          const Component = componentMap[question.variant];
          return Component ? 
            <Component
              {...question}
              key={question.questionID}
              value={value}
              stateUpdater={handleChange}
              addPropHandler={addPropHandler}
              index={index}
              isError={question.question === errorQuestion}
            /> : null;
        })}
      </ul>
      {children}
    </form>
  );
};
