'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useKnobContext } from '../Knob.context';
import { defaultTextProps } from './KnobText.props';

export const KnobText = withComponent({
    name: 'KnobText',
    defaultProps: defaultTextProps,
    setup() {
        const knob = useKnobContext();

        return { knob };
    },
    render(instance) {
        const { props, ptmi, knob } = instance;

        const rootProps = mergeProps(
            {
                className: knob?.cx('text'),
                x: 50,
                y: 57,
                textAnchor: 'middle',
                fill: props.color
            },
            knob?.ptm('text'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children ?? knob?.state.value} />;
    }
});
