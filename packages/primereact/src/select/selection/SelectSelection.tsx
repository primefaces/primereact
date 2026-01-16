'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { useListboxContext } from 'primereact/listbox';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultSelectionProps } from './SelectSelection.props';

export const SelectSelection = withComponent({
    name: 'SelectSelection',
    defaultProps: defaultSelectionProps,
    setup() {
        const select = useSelectContext();
        const listbox = useListboxContext();

        return { select, listbox };
    },
    render(instance) {
        const { props, ptmi, select } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: select?.cx('selection')
            },
            select?.ptm('selection'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
