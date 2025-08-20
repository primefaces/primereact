'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useKnobContext } from '../Knob.context';
import { defaultRangeProps } from './KnobRange.props';

export const KnobRange = withComponent({
    name: 'KnobRange',
    defaultProps: defaultRangeProps,
    setup() {
        const knob = useKnobContext();

        return { knob };
    },
    render(instance) {
        const { props, ptmi, knob } = instance;

        const rootProps = mergeProps(
            {
                className: knob?.cx('range'),
                d: knob?.rangePath,
                strokeWidth: props.strokeWidth ?? knob?.props.strokeWidth ?? 14,
                stroke: props.color
            },
            knob?.ptm('range'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
