'use client'

import { useRef } from 'react'
import { DateInput } from '@nextui-org/react'
import { I18nProvider } from "@react-aria/i18n";
import { getLocalTimeZone, CalendarDate, parseDate } from "@internationalized/date";
import type { Question } from '@/utils/interfaces/types'

export function Date({
    question,
    stateUpdater,
    value,
    index,
    isError
}: Question) {

    const ref = useRef<HTMLLIElement>(null);

    if(isError && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const valueDate = value as CalendarDate

    const handleChange = (newValue: CalendarDate) => {
        stateUpdater!(newValue, index!)
    }

    return (
        <li ref={ref}>
            <I18nProvider locale="es">
                <DateInput
                    label={question}
                    labelPlacement='outside'
                    size='lg'
                    value={valueDate}
                    onChange={(newValue) => handleChange(newValue)}
                    classNames={{
                        label: `text-lg font-bold ${isError ? 'text-red-400' : 'text-secondary'}`,
                        input: 'px-2'
                    }}
                />
                <p className="font-secondary m-0 text-secondary text-md mt-4">
                    Fecha seleccionada: {valueDate ? valueDate.toDate(getLocalTimeZone()).toLocaleDateString('es', { year: 'numeric', month: 'long', day: 'numeric' }) : "--"}
                </p>
            </I18nProvider>
        </li>
    )
}