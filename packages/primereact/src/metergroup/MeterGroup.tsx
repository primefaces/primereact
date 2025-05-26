'use client';
import { Component } from '@primereact/core/component';
import { useMeterGroup } from '@primereact/headless/metergroup';
import { styles } from '@primereact/styles/metergroup';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { MeterGroupProvider } from './MeterGroup.context';
import { defaultProps } from './MeterGroup.props';
import { MeterGroupIcon } from './icon';
import { MeterGroupLabel } from './label';
import { MeterGroupLabels } from './labels';
import { MeterGroupMarker } from './marker';
import { MeterGroupMeter } from './meter';
import { MeterGroupMeters } from './meters';
import { MeterGroupText } from './text';

export const MeterGroup = withComponent({
    name: 'MeterGroup',
    defaultProps,
    styles,
    setup(instance) {
        const metergroup = useMeterGroup(instance.inProps);

        return metergroup;
    },
    render(instance) {
        const { id, props, state, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                role: 'meter',
                'aria-valuemin': props.min,
                'aria-valuenow': state.totalPercent,
                'aria-valuemax': props.max
            },
            ptmi('root')
        );

        return (
            <MeterGroupProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </MeterGroupProvider>
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
