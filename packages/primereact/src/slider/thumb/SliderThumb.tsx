'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useSliderContext } from '../Slider.context';
import { defaultContentProps } from './SliderThumb.props';

export const SliderThumb = withComponent({
    name: 'SliderThumb',
    defaultProps: defaultContentProps,
    setup() {
        const slider = useSliderContext();

        return { slider };
    },
    render(instance) {
        const { props, ptmi, slider } = instance;
        const indexRef = React.useRef<number | null>(null);

        if (indexRef.current === null && slider?.registerThumb) {
            indexRef.current = slider?.registerThumb();
        }

        const index = indexRef.current ?? 0;

        const rootProps = mergeProps(
            {
                className: slider?.cx('thumb'),
                style: { ...(slider?.range() ? (index === 1 ? slider?.rangeEndHandleStyle() : slider?.rangeStartHandleStyle()) : slider?.handleThumbStyle()), ...slider?.sx('thumb') },
                tabIndex: slider?.props.tabIndex,
                role: 'slider',
                'aria-valuemin': slider?.props.min,
                'aria-valuenow': slider?.range() && Array.isArray(slider?.state.value) ? slider?.state.value[index] : typeof slider?.state.value === 'number' ? slider?.state.value : slider?.props.min || 0,
                'aria-valuemax': slider?.props.max,
                'aria-labelledby': props.ariaLabelledby,
                'aria-label': props.ariaLabel,
                'aria-orientation': slider?.props.orientation,
                'data-pc-index': index,
                onTouchStart: (e: React.TouchEvent<HTMLElement>) => slider?.onTouchStart(e, index),
                onTouchMove: slider?.onDrag,
                onTouchEnd: slider?.onDragEnd,
                onMouseDown: (e: React.MouseEvent<HTMLElement>) => slider?.onMouseDown(e, index),
                onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => slider?.onKeyDown(e, index)
            },
            slider?.ptm('thumb'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
