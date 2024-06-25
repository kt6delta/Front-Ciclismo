import { CalendarDate } from "@internationalized/date";
import {SVGProps} from "react";
// Zustand store interfaces

type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
interface ISelectedEntity {
  iNo: string;
  linearizationUri: string;
  foundationUri: string;
  code: string;
  title: string;
  selectedText: string;
  searchQuery?: string;
}  

interface IFormSlice {
  formAnswersMap: {
    [key: string]: any
  }
  setFormAnswer: (field: string, answer: any) => void
}


export interface DoubleInputObject {
  [key: string]: string;
}

export interface locationObject {
  country: string;
  state: string | null;
  city: string | null;
}

interface Question {
  questionID: string;
  field: string;
  variant: 'shortText' | 'singleChoice'  | 'multipleChoice' | 'doubleInput' | 'date' | 'longText' | 'range' | 'multipleSelect' | 'searchSelect';
  question: string;
  value: string | number | number[] | string[] | DoubleInputObject | CalendarDate | DoubleInputObject[] | locationObject | null;
  valueType?: 'string' | 'number' | 'stringArray' | 'numberArray' | 'doubleInput' | 'doubleInputArray' | 'calendarDate' | 'locationObject',
  extraValue?: string
  stateUpdater?: (value: Question['value'], questionIndex: number, isExtraComponent?: boolean) => void;
  addPropHandler?: (key: string, value: any, index: number) => void;
  index?: number;
  description?: string;
  hasConditionalQuestions?: boolean;
  showingConditionalQuestions?: boolean;
  conditionalQuestions?: {
    conditionalValue: string;
    questions: Question[];
  }
  isConditionalQuestion?: boolean;
  isError?: boolean;
  dependsOn?: string;
  conditionalValue?: string;
  [key: string]: any;

  // shortText
  inputType?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  isExtraComponent?: boolean;
  isExtraComponentFor?: string;

  // multipleChoice
  chosingOptions?: string[];
  isMultipleAnswer?: boolean;
  optionsToExtraAnswer?: string[] | string;
  extraComponents?: Question[];
  allowMultipleExtraAnswer?: boolean;

  // multipleSelect
  maxAnswers?: number;
  optionsAnswers?: string[];
  required?: boolean;

  //searchSelect
  selectOptions?: { name: string; isoCode: string; }[];
  defaultSelectedKeys?: string | locationObject;

  // locationSearchSelect
  locationVariant?: 'country' | 'state' | 'city';
  
  // doubleInput
  firstInputType?: 'text' | 'email' | 'password' | 'number';
  secondInputType?: 'text' | 'email' | 'password' | 'number';
  firstLabel?: string;
  secondLabel?: string;
  firstPlaceholder?: string;
  secondPlaceholder?: string;
  firstDescription?: string;
  secondDescription?: string;
  allowMultipleAnswers?: boolean;

  // long text

  maxLength?: number;

  // Range

  marks?: { value: number, label: string }[]; // options for the slider. max 4 options.
  showSteps?: boolean; // show the steps in the slider
  maxValue?: number; // When marks exits, this must be the marks.length. If it is a range of money, defined this as dollars
  minValue?: number; // Almost all cases this will be cero 0. If is a range of money, defined this as dollars
  isValueACurrency?: boolean; // If the value is a currency, we'll convert it to user's local currency
  step?: number; // step represent the distance between each mark. If marks exists,don´t define this, it will be calculated automatically
  defaultValue?: number | number[]; // Where the slider will start. If is a range, this must be an array with two numbers
  hideValue?: boolean; // hide the value of the slider
  formatOptions?: { style: 'currency' | 'decimal' | 'percent' | 'unit', currency: string } // The format of the value of the slider. Defined currency as 'USD', inside the component we'll convert it to user's local currency
}

interface Questionary {
  [key: string]: QuestionarySection;
}

interface QuestionarySection {
  sectionID: string;
  name: string;
  questions: Question[];
  urlSlug: string;
}

//TablePacientes 
type Column = {
  sortable?: boolean;
  uid: string;
  name: string;
};
type statusT = {
  name: string;
  uid: string;
};

type TablePacientesProps = {
  users: any[];
  columns: Column[];
  statusOptions: statusT[];
};

export type {
  Question,
  QuestionarySection,
  Questionary,
  IFormSlice,
  ISelectedEntity,
  IconSvgProps, 
  TablePacientesProps
}