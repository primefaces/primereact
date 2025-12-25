'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useTextarea } from '@primereact/headless/textarea';
import { styles } from '@primereact/styles/textarea';
import { mergeProps } from '@primeuix/utils';
import { useFluidContext } from 'primereact/fluid';
import * as React from 'react';
import { TextareaProvider } from './Textarea.context';
import { defaultProps } from './Textarea.props';

export const Textarea = withComponent({
    name: 'Textarea',
    defaultProps,
    styles,
    setup(instance) {
        const textarea = useTextarea(instance?.inProps);
        const fluid = useFluidContext();

        return { ...textarea, fluid };
    },
    render(instance) {
        const { id, props, ptmi, cx, onInput, fluid } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root', { $fluid: !!fluid }),
                onInput
            },
            ptmi('root')
        );

        return (
            <TextareaProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </TextareaProvider>
        );
    }
});
