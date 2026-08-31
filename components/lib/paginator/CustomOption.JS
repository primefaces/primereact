import * as React from 'react';
import { PrimeReactContext, localeOption } from '../api/Api';
import { ariaLabel } from '../api/Locale';
 
import { useMergeProps } from '../hooks/Hooks';
import { ObjectUtils } from '../utils/Utils';
import { RowsPerPageDropdownBase } from './PaginatorBase';

export const CustomOption = React.memo((inProps) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = RowsPerPageDropdownBase.getProps(inProps, context);
  
    const value = props.totalPages > 0 ? props.page + 1 : 0;
    const element = null;

    if (props.template) {
        const defaultOptions = {
            value,
            //onChange: onChange,
            disabled: props.disabled,
            className: 'p-paginator-page-input',
            
            element,
            props
        };

        return ObjectUtils.getJSXElement(props.template, defaultOptions);
    }

    return element;
});

CustomOption.displayName = 'CustomOption';
