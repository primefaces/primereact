'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { DatePickerRootInstance } from '@primereact/types/shared/datepicker';

export const [DatePickerProvider, useDatePickerContext] = createOptionalContext<DatePickerRootInstance>();
