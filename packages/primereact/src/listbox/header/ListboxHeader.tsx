'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useListboxContext } from '../Listbox.context';
import { defaultHeaderProps } from './ListboxHeader.props';

export const ListboxHeader = withComponent({
    name: 'ListboxHeader',
    defaultProps: defaultHeaderProps,
    setup() {
        const listbox = useListboxContext();

        return { listbox };
    },
    render(instance) {
        const { props, ptmi, listbox } = instance;

        const rootProps = mergeProps(
            {
                className: listbox?.cx('header')
            },
            listbox?.ptm('header'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
