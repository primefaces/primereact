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

        const rootProps = mergeProps(
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
            ptmi('root')
        );

        // @ts-expect-error: Listbox.Root expects a type prop, but we are using it as a root.
        return <Component ref={autocomplete?.listRef} as={Listbox.Root} instance={instance} attrs={rootProps} pt={autocomplete?.ptm('pcListbox')} children={props.children ?? <Listbox.Options />} />;
    }
});
