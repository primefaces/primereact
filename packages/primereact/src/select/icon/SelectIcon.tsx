'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultIconProps } from './SelectIcon.props';

export const SelectIcon = withComponent({
    name: 'Select.Icon',
    defaultProps: defaultIconProps,
    setup() {
        const select = useSelectContext();

        return { select };
    },
    render(instance) {
        const { props, ptmi, select } = instance;

        const rootProps = mergeProps(
            {
                className: select?.cx('icon')
            },
            select?.ptm('icon'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
