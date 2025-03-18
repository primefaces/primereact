import { FilterMatchMode } from '@primereact/core/api';
import type { PrimeReactProps } from './PrimeReact.types';

export const defaultProps: Partial<PrimeReactProps> = {
    csp: { nonce: undefined },
    defaults: undefined,
    filterMatchModeOptions: {
        text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
        numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
        date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
    },
    inputVariant: undefined,
    locale: 'en',
    pt: undefined,
    ptOptions: { mergeSections: true, mergeProps: false },
    ripple: false,
    theme: undefined,
    stylesheet: undefined,
    unstyled: false,
    zIndex: { modal: 1100, overlay: 1000, menu: 1000, tooltip: 1100 }
};
