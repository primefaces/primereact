'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Listbox, useListboxContext } from 'primereact/listbox';
import * as React from 'react';
import { useAutoCompleteContext } from '../AutoComplete.context';
import { defaultSelectionProps } from './AutoCompleteSelection.props';

export const AutoCompleteSelection = withComponent({
    name: 'AutoCompleteSelection',
    defaultProps: defaultSelectionProps,
    setup() {
        const autocomplete = useAutoCompleteContext();
        const listbox = useListboxContext();

        return { autocomplete, listbox };
    },
    render(instance) {
        const { props, ptmi, autocomplete } = instance;

        const rootProps = mergeProps(
            {
                className: autocomplete?.cx('selection')
            },
            ptmi('root')
        );

        // @ts-expect-error: Listbox.Selection expects a type prop, but we are using it as a selection.
        return <Component as={Listbox.Selection} instance={instance} attrs={rootProps} pt={autocomplete?.ptm('selection')} children={props.children} />;
    }
});
