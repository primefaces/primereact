'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useButton } from '@primereact/headless/button';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ButtonProvider } from './Button.context';
import { defaultProps } from './Button.props';

export const Button = withComponent({
    name: 'Button',
    defaultProps,
    setup(instance) {
        const button = useButton(instance.inProps);

        return button;
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
            <ButtonProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ButtonProvider>
        );
    }
});
