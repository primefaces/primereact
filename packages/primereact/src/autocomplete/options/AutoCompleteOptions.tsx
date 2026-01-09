'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { useListboxContext } from 'primereact/listbox';
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
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: autocomplete?.cx('options')
            },
            autocomplete?.ptm('options'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
