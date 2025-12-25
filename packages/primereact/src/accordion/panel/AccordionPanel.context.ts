'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { AccordionPanelInstance } from '@primereact/types/shared/accordion';

export const [AccordionPanelProvider, useAccordionPanelContext] = createOptionalContext<AccordionPanelInstance>();
