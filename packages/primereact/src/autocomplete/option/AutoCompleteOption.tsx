'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps, resolve } from '@primeuix/utils';
import { useListboxContext, useListboxOptionContext } from 'primereact/listbox';
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
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: autocomplete?.cx('option'),
                index: props.index,
                uKey: props.uKey,
                group: props.group
            },
            autocomplete?.ptm('option'),
            ptmi('root')
        );

        return (
            <Component as={as} instance={instance} attrs={rootProps}>
                <AutoCompleteOptionContent>{props.children}</AutoCompleteOptionContent>
            </Component>
        );
    }
});
