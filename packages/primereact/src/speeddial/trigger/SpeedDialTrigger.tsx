'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSpeedDialContext } from '../SpeedDial.context';
import { defaultTriggerProps } from './SpeedDialTrigger.props';

export const SpeedDialTrigger = withComponent({
    name: 'SpeedDial.Trigger',
    defaultProps: defaultTriggerProps,
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
                className: speeddial?.cx('trigger'),
                'aria-expanded': speeddial?.state.visible,
                'aria-haspopup': 'true',
                'aria-controls': `${speeddial?.id}_list`,
                [speeddial?.state.visible ? 'data-open' : 'data-closed']: '',
                onClick: speeddial?.onTriggerClick,
                onKeyDown: speeddial?.onTriggerKeyDown
            },
            speeddial?.ptm('trigger'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
