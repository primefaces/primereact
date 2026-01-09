'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Listbox } from 'primereact/listbox';
import * as React from 'react';
import { useAutoCompleteContext } from '../AutoComplete.context';
import { defaultEmptyProps } from './AutoCompleteEmpty.props';

export const AutoCompleteEmpty = withComponent({
    name: 'AutoCompleteEmpty',
    defaultProps: defaultEmptyProps,
    setup() {
        const autocomplete = useAutoCompleteContext();

        return { autocomplete };
    },
    render(instance) {
        const { props, ptmi, autocomplete } = instance;

        const rootProps = mergeProps(
            {
                className: autocomplete?.cx('empty')
            },
            autocomplete?.ptm('empty'),
            ptmi('root')
        );

        // @ts-expect-error: Listbox.Empty expects a type prop, but we are using it as a listbox.
        return <Component as={Listbox.Empty} instance={instance} attrs={rootProps} pt={autocomplete?.ptm('empty')} children={props.children} />;
    }
});
