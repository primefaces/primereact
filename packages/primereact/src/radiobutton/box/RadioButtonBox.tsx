'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useRadioButtonContext } from '../RadioButton.context';
import { defaultBoxProps } from './RadioButtonBox.props';

export const RadioButtonBox = withComponent({
    name: 'RadioButtonBox',
    defaultProps: defaultBoxProps,
    setup() {
        const radiobutton = useRadioButtonContext();

        return { radiobutton };
    },
    render(instance) {
        const { id, props, ptmi, radiobutton } = instance;

        const boxProps = mergeProps(
            {
                id,
                className: radiobutton?.cx('box'),
                ...(radiobutton?.state.checked ? { 'data-checked': '' } : { 'data-unchecked': '' }),
                ...(radiobutton?.props.disabled && { 'data-disabled': '' }),
                ...(radiobutton?.props.invalid && { 'data-invalid': '' })
            },
            radiobutton?.ptm('icon'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={boxProps} children={props.children} />;
    }
});
