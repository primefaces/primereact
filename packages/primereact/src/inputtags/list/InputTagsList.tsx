'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Listbox } from '@primereact/ui/listbox';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useInputTagsContext } from '../InputTags.context';
import { defaultListProps } from './InputTagsList.props';

export const InputTagsList = withComponent({
    name: 'InputTagsList',
    defaultProps: defaultListProps,
    setup() {
        const inputtags = useInputTagsContext();

        return { inputtags };
    },
    render(instance) {
        const { props, ptmi, inputtags } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: inputtags?.cx('list'),
                listboxInstance: inputtags?.listbox
            },
            inputtags?.ptm('pcListbox'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children ?? <Listbox.Options />} />;
    }
});
