'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { DatePickerTableBodyInstance } from '@primereact/types/shared/datepicker';

export const [DatePickerTableBodyProvider, useDatePickerTableBodyContext] = createOptionalContext<DatePickerTableBodyInstance>();
