'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useInputGroup } from '@primereact/headless/inputgroup';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { InputGroupProvider } from '../InputGroup.context';
import { defaultRootProps } from './InputGroupRoot.props';

export const InputGroupRoot = withComponent({
    name: 'InputGroupRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const inputgroup = useInputGroup(instance?.inProps);

        return inputgroup;
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
            <InputGroupProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </InputGroupProvider>
        );
    }
});
