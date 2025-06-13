import * as HeadlessAccordion from '@primereact/headless/accordion';
import type { AccordionProps } from '@primereact/types/shared/accordion';

export const defaultProps: AccordionProps = {
    ...HeadlessAccordion.defaultProps,
    as: 'div',
    lazy: false,
    tabIndex: 0,
    disabled: false
};
