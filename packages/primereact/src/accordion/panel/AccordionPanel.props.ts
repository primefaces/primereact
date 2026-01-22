import type { AccordionPanelProps } from '@primereact/types/shared/accordion';
import { CollapsibleRoot } from 'primereact/collapsible';

export const defaultPanelProps: AccordionPanelProps = {
    as: CollapsibleRoot,
    value: undefined,
    disabled: false
};
