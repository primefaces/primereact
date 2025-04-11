'use client';
import { Component, withComponent } from '@primereact/core/component';
import { cn, mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './MeterGroupLabels.props';

export const MeterGroupLabels = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent } = instance;
        const metergroup = getParent('MeterGroup');

        const labelsProps = mergeProps(
            {
                className: cn(metergroup?.cx('labellist'), props.orientation === 'vertical' ? 'p-metergroup-label-list-vertical' : 'p-metergroup-label-list-horizontal')
            },
            metergroup?.ptm('labellist')
        );

        return (
            <Component as={props.as || 'ol'} {...labelsProps}>
                {props.children}
            </Component>
        );
    }
});
