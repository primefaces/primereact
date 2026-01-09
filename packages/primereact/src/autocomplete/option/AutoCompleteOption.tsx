'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps, resolve } from '@primeuix/utils';
import { Listbox, useListboxContext, useListboxOptionContext } from 'primereact/listbox';
import * as React from 'react';
import { useAutoCompleteContext } from '../AutoComplete.context';
import { defaultOptionProps } from './AutoCompleteOption.props';

const AutoCompleteOptionContent = withComponent({
    name: 'AutoCompleteOptionContent',
    defaultProps: {},
    setup() {
        const autocomplete = useAutoCompleteContext();
        const listbox = useListboxContext();
        const optionInstance = useListboxOptionContext();

        return { autocomplete, listbox, optionInstance };
    },
    render(instance) {
        const { props, optionInstance } = instance;

        return resolve(props.children, optionInstance) as React.ReactNode;
    }
});

export const AutoCompleteOption = withComponent({
    name: 'AutoCompleteOption',
    defaultProps: defaultOptionProps,
    setup() {
        const autocomplete = useAutoCompleteContext();
        const listbox = useListboxContext();

        return { autocomplete, listbox };
    },
    render(instance) {
        const { props, ptmi, autocomplete } = instance;

        const rootProps = mergeProps(
            {
                className: autocomplete?.cx('option'),
                index: props.index,
                uKey: props.uKey,
                group: props.group
            },
            ptmi('root')
        );

        return (
            // @ts-expect-error: Listbox.Option expects a type prop, but we are using it as a option.
            <Component as={Listbox.Option} instance={instance} attrs={rootProps} pt={autocomplete?.ptm('option')}>
                <AutoCompleteOptionContent>{props.children}</AutoCompleteOptionContent>
            </Component>
        );
    }
});
