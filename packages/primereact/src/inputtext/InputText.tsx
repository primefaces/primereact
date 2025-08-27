'use client';
import { Component } from '@primereact/core/component';
import { useInputText } from '@primereact/headless/inputtext';
import { styles } from '@primereact/styles/inputtext';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { useFluidContext } from 'primereact/fluid';
import * as React from 'react';
import { InputTextProvider } from './InputText.context';
import { defaultProps } from './InputText.props';

export const InputText = withComponent({
    name: 'InputText',
    defaultProps,
    styles,
    setup(instance) {
        const inputtext = useInputText(instance?.inProps);
        const fluid = useFluidContext();

        return { ...inputtext, fluid };
    },
    render(instance) {
        const { id, props, ptmi, cx, fluid } = instance;

        const rootProps = mergeProps(
            {
                id,
                type: 'text',
                className: cx('root', { $fluid: !!fluid })
            },
            ptmi('root')
        );

        return (
            <InputTextProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </InputTextProvider>
        );
    }
});
