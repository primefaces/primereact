'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useMeterGroupContext } from '../MeterGroup.context';
import { defaultMeterProps } from './MeterGroupMeter.props';

export const MeterGroupMeter = withComponent({
    name: 'MeterGroupMeter',
    defaultProps: defaultMeterProps,
    setup(instance) {
        const { props } = instance;
        const metergroup = useMeterGroupContext();

        // effects
        React.useEffect(() => {
            metergroup?.updateTotalPercent(props.value ?? 0);

            return () => {
                metergroup?.updateTotalPercent(-(props.value ?? 0));
            };
        }, [props.value]);

        return { metergroup };
    },
    render(instance) {
        const { props, ptmi, metergroup } = instance;

        const rootProps = mergeProps(
            {
                className: metergroup?.cx('meter'),
                style: {
                    backgroundColor: props.color,
                    width: metergroup?.props.orientation === 'horizontal' && metergroup?.percentAsString(props.value ?? 0),
                    height: metergroup?.props.orientation === 'vertical' && metergroup?.percentAsString(props.value ?? 0)
                }
            },
            metergroup?.ptm('meter'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
