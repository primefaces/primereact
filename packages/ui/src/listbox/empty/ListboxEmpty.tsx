'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useListboxContext } from '../Listbox.context';
import { defaultEmptyProps } from './ListboxEmpty.props';

export const ListboxEmpty = withComponent({
    name: 'ListboxEmpty',
    defaultProps: defaultEmptyProps,
    setup() {
        const listbox = useListboxContext();

        return { listbox };
    },
    render(instance) {
        const { props, ptmi, listbox } = instance;

        const rootProps = mergeProps(
            {
                className: listbox?.cx('empty')
            },
            listbox?.ptm('empty'),
            ptmi('root')
        );

        return <Component pIf={listbox?.getOptions().length === 0} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
