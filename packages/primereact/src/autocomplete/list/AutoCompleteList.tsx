'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useListboxValueChangeEvent } from '@primereact/types/shared/listbox';
import { Listbox } from '@primereact/ui/listbox';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useAutoCompleteContext } from '../AutoComplete.context';
import { defaultListProps } from './AutoCompleteList.props';

export const AutoCompleteList = withComponent({
    name: 'AutoCompleteList',
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
                options: autocomplete?.props.options,
                optionLabel: autocomplete?.props.optionLabel,
                optionValue: autocomplete?.props.optionValue,
                optionDisabled: autocomplete?.props.optionDisabled,
                optionGroupLabel: autocomplete?.props.optionGroupLabel,
                optionGroupChildren: autocomplete?.props.optionGroupChildren,
                value: autocomplete?.state.value,
                tabIndex: -1,
                autoOptionFocus: autocomplete?.props.autoOptionFocus,
                selectOnFocus: autocomplete?.props.selectOnFocus,
                focusOnHover: autocomplete?.props.focusOnHover,
                checkmark: autocomplete?.props.checkmark,
                onValueChange: (e: useListboxValueChangeEvent) => autocomplete?.onOptionSelect(e),
                listboxInstance: autocomplete?.listbox
            },
            autocomplete?.ptm('pcListbox'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children ?? <Listbox.Options />} />;
    }
});
