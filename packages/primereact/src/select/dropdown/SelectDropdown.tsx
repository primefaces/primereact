'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultDropdownProps } from './SelectDropdown.props';

export const SelectDropdown = withComponent({
    name: 'Select.Dropdown',
    defaultProps: defaultDropdownProps,
    setup() {
        const select = useSelectContext();

        return { select };
    },
    render(instance) {
        const { props, ptmi, select } = instance;

        const rootProps = mergeProps(
            {
                className: select?.cx('dropdown')
            },
            select?.ptm('dropdown'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
