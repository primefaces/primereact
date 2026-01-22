'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useAutoComplete } from '@primereact/headless/autocomplete';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { AutoCompleteProvider } from '../AutoComplete.context';
import { defaultRootProps } from './AutoCompleteRoot.props';

export const AutoCompleteRoot = withComponent({
    name: 'AutoComplete.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const autocomplete = useAutoComplete(instance.inProps);

        return autocomplete;
    },
    render(instance) {
        const { id, props, ptmi, cx, sx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                style: sx('root')
            },
            ptmi('root')
        );

        return (
            <AutoCompleteProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </AutoCompleteProvider>
        );
    }
});
