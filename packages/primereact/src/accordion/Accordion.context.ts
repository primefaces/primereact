'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { AccordionRootInstance } from '@primereact/types/shared/accordion';

export const [AccordionProvider, useAccordionContext] = createOptionalContext<AccordionRootInstance>();
