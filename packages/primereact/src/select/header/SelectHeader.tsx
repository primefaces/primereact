'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultHeaderProps } from './SelectHeader.props';

export const SelectHeader = withComponent({
    name: 'SelectHeader',
    defaultProps: defaultHeaderProps,
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
                className: select?.cx('header')
            },
            select?.ptm('header'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
