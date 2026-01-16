'use client';

import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultFilterProps } from './SelectFilter.props';

export const SelectFilter = withComponent({
    name: 'SelectFilter',
    defaultProps: defaultFilterProps,
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
                className: select?.cx('filter'),
                onKeyDown: select?.onFilterKeyDown
            },
            select?.ptm('filter'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
