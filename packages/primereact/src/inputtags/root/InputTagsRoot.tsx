'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useInputTags } from '@primereact/headless/inputtags';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { InputTagsProvider } from '../InputTags.context';
import { defaultRootProps } from './InputTagsRoot.props';

export const InputTagsRoot = withComponent({
    name: 'InputTagsRoot',
    defaultProps: defaultRootProps,
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
    }
});
