'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultEmptyProps } from './SelectEmpty.props';

export const SelectEmpty = withComponent({
    name: 'SelectEmpty',
    defaultProps: defaultEmptyProps,
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
                className: select?.cx('empty')
            },
            select?.ptm('empty'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
