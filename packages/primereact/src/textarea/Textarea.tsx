'use client';
import { Component } from '@primereact/core/component';
import { useTextarea } from '@primereact/headless/textarea';
import { styles } from '@primereact/styles/textarea';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { TextareaProvider } from './Textarea.context';
import { defaultProps } from './Textarea.props';

export const Textarea = withComponent({
    name: 'Textarea',
    defaultProps,
    styles,
    setup(instance) {
        const textarea = useTextarea(instance?.inProps);

        return textarea;
    },
    render(instance) {
        const { id, props, ptmi, cx, onInput } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
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
