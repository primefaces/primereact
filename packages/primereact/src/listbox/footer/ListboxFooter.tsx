'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useListboxContext } from '../Listbox.context';
import { defaultFooterProps } from './ListboxFooter.props';

export const ListboxFooter = withComponent({
    name: 'ListboxFooter',
    defaultProps: defaultFooterProps,
    setup() {
        const listbox = useListboxContext();

        return { listbox };
    },
    render(instance) {
        const { props, ptmi, listbox } = instance;

        const rootProps = mergeProps(
            {
                className: listbox?.cx('footer')
            },
            listbox?.ptm('footer'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
