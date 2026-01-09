'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Listbox } from 'primereact/listbox';
import * as React from 'react';
import { useAutoCompleteContext } from '../AutoComplete.context';
import { defaultFooterProps } from './AutoCompleteFooter.props';

export const AutoCompleteFooter = withComponent({
    name: 'AutoCompleteFooter',
    defaultProps: defaultFooterProps,
    setup() {
        const autocomplete = useAutoCompleteContext();

        return { autocomplete };
    },
    render(instance) {
        const { props, ptmi, autocomplete } = instance;

        const rootProps = mergeProps(
            {
                className: autocomplete?.cx('footer')
            },
            autocomplete?.ptm('footer'),
            ptmi('root')
        );

        // @ts-expect-error: Listbox.Footer expects a type prop, but we are using it as a listbox.
        return <Component as={Listbox.Footer} instance={instance} attrs={rootProps} pt={autocomplete?.ptm('footer')} children={props.children} />;
    }
});
