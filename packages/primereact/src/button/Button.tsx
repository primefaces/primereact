'use client';
import { Component } from '@primereact/core/component';
import { useButton } from '@primereact/headless/button';
import { styles } from '@primereact/styles/button';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { ButtonProvider } from './Button.context';
import { defaultProps } from './Button.props';
import { ButtonGroup } from './group';

export const Button = withComponent({
    name: 'Button',
    defaultProps,
    styles,
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
    },
    components: {
        Group: ButtonGroup
    }
});
