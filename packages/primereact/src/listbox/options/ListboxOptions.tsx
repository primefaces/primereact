'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useListboxContext } from '../Listbox.context';
import { ListboxOption } from '../option/ListboxOption';
import { ListboxSelection } from '../selection';
import { defaultOptionsProps } from './ListboxOptions.props';

export const ListboxOptions = withComponent({
    name: 'ListboxOptions',
    defaultProps: defaultOptionsProps,
    setup() {
        const listbox = useListboxContext();

        return { listbox, options: listbox.getOptions() };
    },
    render(instance) {
        const { id, props, ptmi, listbox, options } = instance;

        const createOptions = () => {
            return options?.map((option: any, index: number) => {
                const label = listbox.getOptionLabel(option);

                return (
                    <ListboxOption key={index} index={index}>
                        <ListboxSelection pIf={listbox.props.checkmark || listbox.props.checkbox} />
                        {label}
                    </ListboxOption>
                );
            });
        };

        const rootProps = mergeProps(
            {
                id: `${id}_list`,
                className: listbox?.cx('list'),
                tabIndex: -1,
                role: 'listbox',
                'aria-activedescendant': listbox?.state.focused ? listbox.getFocusedOptionId() : undefined,
                onFocus: (event: React.FocusEvent) => listbox?.onListFocus(event),
                onBlur: (event: React.FocusEvent) => listbox?.onListBlur(event),
                onKeyDown: (event: React.KeyboardEvent) => listbox?.onListKeyDown(event)
            },
            listbox?.ptm('list'),
            ptmi('root')
        );

        const content = props.children ?? createOptions();

        return (
            <Component ref={listbox?.listRef} instance={instance} attrs={rootProps}>
                {content}
            </Component>
        );
    }
});
