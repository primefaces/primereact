'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSpeedDialContext } from '../SpeedDial.context';
import { defaultActionProps } from './SpeedDialAction.props';

export const SpeedDialAction = withComponent({
    name: 'SpeedDial.Action',
    defaultProps: defaultActionProps,
    setup() {
        const speeddial = useSpeedDialContext();

        return { speeddial };
    },
    render(instance) {
        const { props, ptmi, speeddial } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                type: 'button',
                className: speeddial?.cx('action'),
                tabIndex: -1,
                role: 'menuitem',
                onClick: speeddial?.onItemClick,
                onKeyDown: speeddial?.onItemKeyDown
            },
            speeddial?.ptm('action'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
