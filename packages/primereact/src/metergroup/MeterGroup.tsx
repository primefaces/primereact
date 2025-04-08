'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useMeterGroup } from '@primereact/headless/metergroup';
import { styles } from '@primereact/styles/metergroup';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './MeterGroup.props';
import { MeterGroupIcon } from './icon';
import { MeterGroupLabel } from './label';
import { MeterGroupLabels } from './labels';
import { MeterGroupMarker } from './marker';
import { MeterGroupMeter } from './meter';
import { MeterGroupMeters } from './meters';
import { MeterGroupText } from './text';

export const MeterGroup = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const metergroup = useMeterGroup(instance.inProps);

        return metergroup;
    },
    render: (instance) => {
        const {
            id,
            props,
            ptmi,
            cx,
            // element refs
            elementRef
        } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                style: props.style,
                role: 'meter',
                'aria-valuemin': props.min,
                'aria-valuenow': props.max, // TODO:
                'aria-valuemax': props.max
            },
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.children}
            </Component>
        );
    },
    components: {
        Meters: MeterGroupMeters,
        Meter: MeterGroupMeter,
        Labels: MeterGroupLabels,
        Label: MeterGroupLabel,
        Marker: MeterGroupMarker,
        Text: MeterGroupText,
        Icon: MeterGroupIcon
    }
});
