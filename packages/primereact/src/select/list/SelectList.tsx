'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Listbox } from '@primereact/ui/listbox';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultListProps } from './SelectList.props';

export const SelectList = withComponent({
    name: 'SelectList',
    defaultProps: defaultListProps,
    setup() {
        const select = useSelectContext();

        return { select };
    },
    render(instance) {
        const { props, ptmi, select } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: select?.cx('list'),
                checkmark: select?.props.checkmark,
                listboxInstance: select?.listbox
            },
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children ?? <Listbox.Options />} />;
    }
});
