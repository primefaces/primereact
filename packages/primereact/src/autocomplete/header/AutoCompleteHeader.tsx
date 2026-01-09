'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Listbox } from 'primereact/listbox';
import * as React from 'react';
import { useAutoCompleteContext } from '../AutoComplete.context';
import { defaultHeaderProps } from './AutoCompleteHeader.props';

export const AutoCompleteHeader = withComponent({
    name: 'AutoCompleteHeader',
    defaultProps: defaultHeaderProps,
    setup() {
        const autocomplete = useAutoCompleteContext();

        return { autocomplete };
    },
    render(instance) {
        const { props, ptmi, autocomplete } = instance;

        const rootProps = mergeProps(
            {
                className: autocomplete?.cx('header')
            },
            autocomplete?.ptm('header'),
            ptmi('root')
        );

        // @ts-expect-error: Listbox.Header expects a type prop, but we are using it as a listbox.
        return <Component as={Listbox.Header} instance={instance} attrs={rootProps} pt={autocomplete?.ptm('header')} children={props.children} />;
    }
});
