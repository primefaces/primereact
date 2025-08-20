'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useKnobContext } from '../Knob.context';
import { defaultValueProps } from './KnobValue.props';

export const KnobValue = withComponent({
    name: 'KnobValue',
    defaultProps: defaultValueProps,
    setup() {
        const knob = useKnobContext();

        return { knob };
    },
    render(instance) {
        const { props, ptmi, knob } = instance;

        const rootProps = mergeProps(
            {
                className: knob?.cx('value'),
                d: knob?.valuePath,
                strokeWidth: props.strokeWidth ?? knob?.props.strokeWidth ?? 14,
                stroke: props.color
            },
            knob?.ptm('value'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
