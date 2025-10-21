'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useListboxContext } from '../Listbox.context';
import { defaultFilterProps } from './ListboxFilter.props';

export const ListboxFilter = withComponent({
    name: 'ListboxFilter',
    defaultProps: defaultFilterProps,
    setup() {
        const listbox = useListboxContext();

        return { listbox };
    },
    render(instance) {
        const { props, ptmi, listbox } = instance;

        const rootProps = mergeProps(
            {
                className: listbox?.cx('pcFilter'),
                role: 'searchbox',
                autoComplete: 'off',
                disabled: listbox.props.disabled,
                'aria-owns': listbox.props.id + '_list',
                'aria-activedescendant': listbox.getFocusedOptionId(),
                tabIndex: !listbox.props.disabled && !listbox.state.focused ? listbox.props.tabIndex : -1,
                onBlur: listbox.onFilterBlur,
                onChange: listbox.onFilterChange,
                onKeyDown: listbox.onFilterKeyDown
            },
            listbox?.ptm('pcFilter'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
