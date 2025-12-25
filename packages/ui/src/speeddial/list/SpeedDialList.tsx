'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSpeedDialContext } from '../SpeedDial.context';
import { defaultListProps } from './SpeedDialList.props';

export const SpeedDialList = withComponent({
    name: 'SpeedDialList',
    defaultProps: defaultListProps,
    setup() {
        const speeddial = useSpeedDialContext();

        return { speeddial };
    },
    render(instance) {
        const { props, ptmi, speeddial } = instance;

        const rootProps = mergeProps(
            {
                id: `${speeddial?.id}_list`,
                className: speeddial?.cx('list'),
                style: speeddial?.sx('list'),
                role: 'menu',
                tabIndex: -1,
                onBlur: speeddial?.onBlur,
                onKeyDown: speeddial?.onKeyDown
            },
            ptmi('root')
        );

        return <Component ref={speeddial?.listRef} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
