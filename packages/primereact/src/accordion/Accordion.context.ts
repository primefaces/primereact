import { createOptionalContext } from '@primereact/core/utils';
import type { AccordionInstance } from '@primereact/types/shared/accordion';

export const [AccordionProvider, useAccordionContext] = createOptionalContext<AccordionInstance>();
