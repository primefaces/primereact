'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useInputTagsContext } from '../InputTags.context';
import { defaultHiddenInputProps } from './InputTagsHiddenInput.props';

export const InputTagsHiddenInput = withComponent({
    name: 'InputTagsHiddenInput',
    defaultProps: defaultHiddenInputProps,
    setup() {
        const inputtags = useInputTagsContext();

        return { inputtags };
    },
    render(instance) {
        const { props, ptmi, inputtags } = instance;

        const rootProps = mergeProps(
            {
                value: inputtags?.state.value.join(', '),
                type: 'hidden',
                name: props.name
            },
            inputtags?.ptm('hiddenInput'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
