'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useSpeedDialContext } from '../SpeedDial.context';
import { defaultItemProps } from './SpeedDialItem.props';

export const SpeedDialItem = withComponent({
    name: 'SpeedDialItem',
    defaultProps: defaultItemProps,
    setup() {
        const speeddial = useSpeedDialContext();

        return { speeddial };
    },
    render(instance) {
        const { props, ptmi, speeddial } = instance;
        const indexRef = React.useRef<number | null>(null);

        if (indexRef.current === null && speeddial?.registerItem) {
            indexRef.current = speeddial?.registerItem();
        }

        const index = indexRef.current ?? 0;

        const rootProps = mergeProps(
            {
                id: `${speeddial?.id}_${index}`,
                className: speeddial?.cx('item'),
                style: speeddial?.getItemStyle(index),
                role: 'none'
            },
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
