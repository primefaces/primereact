'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useInputText } from '@primereact/headless/inputtext';
import { styles } from '@primereact/styles/inputtext';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './InputText.props';

export const InputText = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const inputtext = useInputText(instance.inProps);

        return inputtext;
    },
    render: (instance) => {
        const {
            id,
            props,
            ptmi,
            cx,
            // element refs
            elementRef,
            // methods
            onInput
        } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                value: props.value,
                type: 'text',
                name: props.name,
                disabled: props.disabled,
                // invalid: props.invalid || undefined
                onInput
            },
            ptmi('root')
        );

        return <Component as={props.as || 'input'} {...rootProps} ref={elementRef} />;
    }
});
