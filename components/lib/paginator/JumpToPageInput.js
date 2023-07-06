import * as React from 'react';
import { InputNumber } from '../inputnumber/InputNumber';
import { ObjectUtils } from '../utils/Utils';
import { JumpToPageInputBase } from './PaginatorBase';
import { PrimeReactContext } from '../api/Api';

export const JumpToPageInput = React.memo((inProps) => {
    const context = React.useContext(PrimeReactContext);
    const props = JumpToPageInputBase.getProps(inProps, context);

    const onChange = (event) => {
        if (props.onChange) {
            props.onChange(props.rows * (event.value - 1), props.rows);
        }
    };

    const value = props.pageCount > 0 ? props.page + 1 : 0;
    const element = <InputNumber value={value} onChange={onChange} className="p-paginator-page-input" disabled={props.disabled} pt={props.ptm('JTPInput')} />;

    if (props.template) {
        const defaultOptions = {
            value,
            onChange: onChange,
            disabled: props.disabled,
            className: 'p-paginator-page-input',
            element,
            props
        };

        return ObjectUtils.getJSXElement(props.template, defaultOptions);
    }

    return element;
});

JumpToPageInput.displayName = 'JumpToPageInput';
