'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCheckboxContext } from '../Checkbox.context';
import { defaultIndicatorProps } from './CheckboxIndicator.props';

export const CheckboxIndicator = withComponent({
    name: 'CheckboxIndicator',
    defaultProps: defaultIndicatorProps,
    setup() {
        const checkbox = useCheckboxContext();

        return { checkbox };
    },
    render(instance) {
        const { id, props, ptmi, checkbox } = instance;

        const indicatorProps = mergeProps(
            {
                id,
                className: checkbox?.cx('indicator'),
                [checkbox?.state.checked ? 'data-checked' : 'data-unchecked']: '',
                ...(checkbox?.props.disabled && { 'data-disabled': '' }),
                ...(checkbox?.props.invalid && { 'data-invalid': '' }),
                ...(checkbox?.props.indeterminate && { 'data-indeterminate': '' })
            },
            checkbox?.ptm('indicator'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={indicatorProps} children={props.children} />;
    }
});
