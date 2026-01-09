'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Listbox, useListboxContext } from 'primereact/listbox';
import * as React from 'react';
import { useAutoCompleteContext } from '../AutoComplete.context';
import { defaultOptionsProps } from './AutoCompleteOptions.props';

export const AutoCompleteOptions = withComponent({
    name: 'AutoCompleteOptions',
    defaultProps: defaultOptionsProps,
    setup() {
        const autocomplete = useAutoCompleteContext();
        const listbox = useListboxContext();

        return { autocomplete, listbox };
    },
    render(instance) {
        const { props, ptmi, autocomplete } = instance;

        const rootProps = mergeProps(
            {
                className: autocomplete?.cx('options')
            },
            autocomplete?.ptm('list'),
            ptmi('root')
        );

        // @ts-expect-error: Listbox.Options expects a type prop, but we are using it as a listbox.
        return <Component as={Listbox.Options} instance={instance} attrs={rootProps} pt={autocomplete?.ptm('options')} children={props.children} />;
    }
});
