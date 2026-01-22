'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useRadioButtonContext } from '../RadioButton.context';
import { defaultIndicatorProps } from './RadioButtonIndicator.props';

export const RadioButtonIndicator = withComponent({
    name: 'RadioButton.Indicator',
    defaultProps: defaultIndicatorProps,
    setup() {
        const radiobutton = useRadioButtonContext();

        return { radiobutton };
    },
    render(instance) {
        const { id, props, ptmi, radiobutton } = instance;

        const indicatorProps = mergeProps(
            {
                id,
                className: radiobutton?.cx('indicator'),
                ...(radiobutton?.state.checked ? { 'data-checked': '' } : { 'data-unchecked': '' }),
                ...(radiobutton?.props.disabled && { 'data-disabled': '' }),
                ...(radiobutton?.props.invalid && { 'data-invalid': '' })
            },
            radiobutton?.ptm('indicator'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={indicatorProps} children={props.children} />;
    }
});
