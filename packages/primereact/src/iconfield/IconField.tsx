'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useIconField } from '@primereact/headless/iconfield';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { IconFieldProvider } from './IconField.context';
import { defaultProps } from './IconField.props';

export const IconField = withComponent({
    name: 'IconField',
    defaultProps,
    setup(instance) {
        const iconfield = useIconField(instance?.inProps);

        return iconfield;
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
            <IconFieldProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </IconFieldProvider>
        );
    }
});
