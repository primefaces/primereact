'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCheckboxContext } from '../Checkbox.context';
import { defaultBoxProps } from './CheckboxBox.props';

export const CheckboxBox = withComponent({
    name: 'CheckboxBox',
    defaultProps: defaultBoxProps,
    setup() {
        const checkbox = useCheckboxContext();

        return { checkbox };
    },
    render(instance) {
        const { id, props, ptmi, checkbox } = instance;

        const boxProps = mergeProps(
            {
                id,
                className: checkbox?.cx('box'),
                [checkbox?.state.checked ? 'data-checked' : 'data-unchecked']: '',
                ...(checkbox?.props.disabled && { 'data-disabled': '' }),
                ...(checkbox?.props.invalid && { 'data-invalid': '' }),
                ...(checkbox?.props.indeterminate && { 'data-indeterminate': '' })
            },
            checkbox?.ptm('icon'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={boxProps} children={props.children} />;
    }
});
