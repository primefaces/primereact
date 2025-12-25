'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useInputTags } from '@primereact/headless/inputtags';
import { styles } from '@primereact/styles/inputtags';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { InputTagsProvider } from './InputTags.context';
import { defaultProps } from './InputTags.props';
import { InputTagsHiddenInput } from './hiddeninput/InputTagsHiddenInput';
import { InputTagsInput } from './input/InputTagsInput';
import { InputTagsItem } from './item/InputTagsItem';

export const InputTags = withComponent({
    name: 'InputTags',
    defaultProps,
    styles,
    setup(instance) {
        const inputtags = useInputTags(instance?.inProps);

        return inputtags;
    },
    render(instance) {
        const { id, props, ptmi, cx, onClick } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                onClick: onClick
            },
            ptmi('root')
        );

        return (
            <InputTagsProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </InputTagsProvider>
        );
    },
    components: {
        Item: InputTagsItem,
        Input: InputTagsInput,
        HiddenInput: InputTagsHiddenInput
    }
});
