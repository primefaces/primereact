'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultFooterProps } from './SelectFooter.props';

export const SelectFooter = withComponent({
    name: 'SelectFooter',
    defaultProps: defaultFooterProps,
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
                className: select?.cx('footer')
            },
            select?.ptm('footer'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
