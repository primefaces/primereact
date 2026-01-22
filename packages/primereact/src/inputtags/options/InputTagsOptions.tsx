'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { useListboxContext } from 'primereact/listbox';
import * as React from 'react';
import { useInputTagsContext } from '../InputTags.context';
import { defaultOptionsProps } from './InputTagsOptions.props';

export const InputTagsOptions = withComponent({
    name: 'InputTags.Options',
    defaultProps: defaultOptionsProps,
    setup() {
        const inputtags = useInputTagsContext();
        const listbox = useListboxContext();

        return { inputtags, listbox };
    },
    render(instance) {
        const { props, ptmi, inputtags } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: inputtags?.cx('options')
            },
            inputtags?.ptm('options'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
