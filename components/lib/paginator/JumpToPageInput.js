import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { ariaLabel } from '../api/Locale';
import { useMergeProps } from '../hooks/Hooks';
import { InputNumber } from '../inputnumber/InputNumber';
import { ObjectUtils } from '../utils/Utils';
import { JumpToPageInputBase } from './PaginatorBase';

export const JumpToPageInput = React.memo((inProps) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = JumpToPageInputBase.getProps(inProps, context);
    const ariaLabelValue = ariaLabel('jumpToPageInputLabel');

    const onChange = (event) => {
        if (props.onChange) {
            props.onChange(props.rows * (event.value - 1), props.rows);
        }
    };

    const value = props.pageCount > 0 ? props.page + 1 : 0;
    const element = (
        <InputNumber value={value} onChange={onChange} className="p-paginator-page-input" disabled={props.disabled} pt={props.ptm('JTPInput')} unstyled={props.unstyled} __parentMetadata={{ parent: props.metaData }} aria-label={ariaLabelValue} />
    );

    if (props.template) {
        const defaultOptions = {
            value,
            onChange: onChange,
            disabled: props.disabled,
            className: 'p-paginator-page-input',
            'aria-label': ariaLabelValue,
            element,
            props
        };

        return ObjectUtils.getJSXElement(props.template, defaultOptions);
    }

    return element;
});

JumpToPageInput.displayName = 'JumpToPageInput';
