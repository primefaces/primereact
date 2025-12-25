'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { DatePickerPickerInstance } from '@primereact/types/shared/datepicker';

export const [DatePickerPickerProvider, useDatePickerPickerContext] = createOptionalContext<DatePickerPickerInstance>();
