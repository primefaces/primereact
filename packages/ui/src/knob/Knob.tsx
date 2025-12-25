'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useKnob } from '@primereact/headless/knob';
import { styles } from '@primereact/styles/knob';
import { mergeProps, resolve } from '@primeuix/utils';
import * as React from 'react';
import { KnobProvider } from './Knob.context';
import { defaultProps } from './Knob.props';
import { KnobRange } from './range';
import { KnobText } from './text';
import { KnobValue } from './value';

export const Knob = withComponent({
    name: 'Knob',
    defaultProps,
    styles,
    setup(instance) {
        const knob = useKnob(instance?.inProps);

        return knob;
    },
    render(instance) {
        const { id, props, state, ptmi, ptm, cx, onClick, onKeyDown, onMouseDown, onMouseUp, onTouchStart, onTouchEnd } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        const createSvg = () => {
            const svgProps = mergeProps(
                {
                    viewBox: '0 0 100 100',
                    role: 'slider',
                    width: props.size,
                    height: props.size,
                    tabIndex: props.readOnly || props.disabled ? -1 : props.tabIndex,
                    'aria-valuemin': props.min,
                    'aria-valuemax': props.max,
                    'aria-valuenow': state.value,
                    'aria-labelledby': props.ariaLabelledby,
                    'aria-label': props.ariaLabel,
                    onClick,
                    onKeyDown,
                    onMouseDown,
                    onMouseUp,
                    onTouchStart,
                    onTouchEnd
                },
                ptm('svg')
            );

            return <svg {...svgProps}>{resolve(props.children, instance)}</svg>;
        };

        const svgElement = createSvg();

        return (
            <KnobProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={svgElement} />
            </KnobProvider>
        );
    },
    components: {
        Text: KnobText,
        Range: KnobRange,
        Value: KnobValue
    }
});
