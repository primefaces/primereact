import * as HeadlessAccordion from '@primereact/headless/accordion';
import type { AccordionRootProps } from '@primereact/types/shared/accordion';

export const defaultRootProps: AccordionRootProps = {
    ...HeadlessAccordion.defaultProps,
    as: 'div',
    lazy: false,
    tabIndex: 0,
    disabled: false
};
