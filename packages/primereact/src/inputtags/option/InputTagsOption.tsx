'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps, resolve } from '@primeuix/utils';
import { useListboxContext, useListboxOptionContext } from 'primereact/listbox';
import * as React from 'react';
import { useInputTagsContext } from '../InputTags.context';
import { defaultOptionProps } from './InputTagsOption.props';

const InputTagsOptionContent = withComponent({
    name: 'InputTagsOptionContent',
    defaultProps: {},
    setup() {
        const inputtags = useInputTagsContext();
        const listbox = useListboxContext();
        const optionInstance = useListboxOptionContext();

        return { inputtags, listbox, optionInstance };
    },
    render(instance) {
        const { props, optionInstance } = instance;

        return resolve(props.children, optionInstance) as React.ReactNode;
    }
});

export const InputTagsOption = withComponent({
    name: 'InputTagsOption',
    defaultProps: defaultOptionProps,
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
                className: inputtags?.cx('option')
            },
            inputtags?.ptm('option'),
            ptmi('root')
        );

        return (
            <Component as={as} instance={instance} attrs={rootProps}>
                <InputTagsOptionContent>{props.children}</InputTagsOptionContent>
            </Component>
        );
    }
});
