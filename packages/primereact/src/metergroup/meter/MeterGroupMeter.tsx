'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './MeterGroupMeter.props';

export const MeterGroupMeter = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const metergroup = getParent('MeterGroup');

        React.useEffect(() => {
            metergroup.setPercent(props.value?.value);

            return () => {
                metergroup.setPercent(-props.value?.value);
            };
        }, [props.value?.value]);

        const percent = (meter = 0) => {
            const percentOfItem = ((meter - metergroup?.props.min) / (metergroup?.props.max - metergroup?.props.min)) * 100;

            return Math.round(Math.max(0, Math.min(100, percentOfItem)));
        };

        const percentValue = (meter: number) => {
            return percent(meter) + '%';
        };

        const meterProps = mergeProps(
            {
                className: metergroup?.cx('meter'),
                style: {
                    backgroundColor: props.value?.color,
                    width: metergroup?.props.orientation === 'horizontal' && percentValue(props.value?.value),
                    height: metergroup?.props.orientation === 'vertical' && percentValue(props.value?.value)
                }
            },
            metergroup?.ptm('meter'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} asChild={props.asChild} {...meterProps}>
                {props.children}
            </Component>
        );
    }
});
