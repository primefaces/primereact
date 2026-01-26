'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useCheckboxGroup } from '@primereact/headless/checkboxgroup';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { CheckboxGroupProvider } from './CheckboxGroup.context';
import { defaultProps } from './CheckboxGroup.props';

export const CheckboxGroup = withComponent({
    name: 'CheckboxGroup',
    defaultProps,
    setup(instance) {
        const checkboxgroup = useCheckboxGroup(instance.inProps);

        return checkboxgroup;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <CheckboxGroupProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </CheckboxGroupProvider>
        );
    }
});
