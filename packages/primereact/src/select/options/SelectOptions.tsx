'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { useListboxContext } from 'primereact/listbox';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultOptionsProps } from './SelectOptions.props';

export const SelectOptions = withComponent({
    name: 'SelectOptions',
    defaultProps: defaultOptionsProps,
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
                className: select?.cx('options')
            },
            select?.ptm('options'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
