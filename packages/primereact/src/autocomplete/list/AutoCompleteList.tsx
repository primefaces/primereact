'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Listbox } from '@primereact/ui/listbox';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useAutoCompleteContext } from '../AutoComplete.context';
import { defaultListProps } from './AutoCompleteList.props';

export const AutoCompleteList = withComponent({
    name: 'AutoComplete.List',
    defaultProps: defaultListProps,
    setup() {
        const autocomplete = useAutoCompleteContext();

        return { autocomplete };
    },
    render(instance) {
        const { props, ptmi, autocomplete } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: autocomplete?.cx('list'),
                checkmark: autocomplete?.props.checkmark,
                listboxInstance: autocomplete?.listbox
            },
            autocomplete?.ptm('pcListbox'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children ?? <Listbox.Options />} />;
    }
});
