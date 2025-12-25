'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useMeterGroup } from '@primereact/headless/metergroup';
import { dt } from '@primeuix/styled';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { MeterGroupProvider } from '../MeterGroup.context';
import { defaultRootProps } from './MeterGroupRoot.props';

export const METERGROUP_DEFAULT_COLORS = {
    blue: dt('blue.500', '#3B82F6'),
    emerald: dt('emerald.500', '#10B981'),
    violet: dt('violet.500', '#8B5CF6'),
    amber: dt('amber.500', '#F59E0B'),
    gray: dt('gray.500', '#6B7280'),
    cyan: dt('cyan.500', '#06B6D4'),
    pink: dt('pink.500', '#EC4899'),
    lime: dt('lime.500', '#84CC16'),
    fuchsia: dt('fuchsia.500', '#D946EF')
};

export const MeterGroupRoot = withComponent({
    name: 'MeterGroupRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const metergroup = useMeterGroup(instance.inProps);
        const colorIndex = React.useRef(0);
        const labelIndex = React.useRef(0);

        const getNextColorIndex = () => {
            const index = colorIndex.current;

            colorIndex.current = (index + 1) % Object.keys(METERGROUP_DEFAULT_COLORS).length;

            return index;
        };

        const getNextLabelIndex = () => {
            const index = labelIndex.current;

            labelIndex.current = (index + 1) % Object.keys(METERGROUP_DEFAULT_COLORS).length;

            return index;
        };

        return {
            ...metergroup,
            colors: METERGROUP_DEFAULT_COLORS,
            getNextColorIndex,
            getNextLabelIndex
        };
    },
    render(instance) {
        const { id, props, state, ptmi, cx, colors } = instance;

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

        const contextValue = {
            ...instance,
            colors
        };

        return (
            <MeterGroupProvider value={contextValue}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </MeterGroupProvider>
        );
    }
});
