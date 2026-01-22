'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useSelect } from '@primereact/headless/select';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { SelectProvider } from '../Select.context';
import { defaultRootProps } from './SelectRoot.props';

export const SelectRoot = withComponent({
    name: 'Select.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const select = useSelect(instance.inProps);

        return select;
    },
    render(instance) {
        const { id, props, ptmi, cx, onContainerClick } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                onClick: onContainerClick
            },
            ptmi('root')
        );

        return (
            <SelectProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </SelectProvider>
        );
    }
});
