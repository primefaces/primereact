'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useIconField } from '@primereact/headless/iconfield';
import { styles } from '@primereact/styles/iconfield';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { IconFieldProvider } from './IconField.context';
import { defaultProps } from './IconField.props';
import { InputIcon } from './icon';

export const IconField = withComponent({
    name: 'IconField',
    defaultProps,
    styles,
    setup(instance) {
        const inputicon = useIconField(instance?.inProps);

        return inputicon;
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
    },
    components: {
        Icon: InputIcon
    }
});
