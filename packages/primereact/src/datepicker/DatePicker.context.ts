import { createOptionalContext } from '@primereact/core/utils';
import type { DatePickerInstance } from '@primereact/types/shared/datepicker';

export const [DatePickerProvider, useDatePickerContext] = createOptionalContext<DatePickerInstance>();
