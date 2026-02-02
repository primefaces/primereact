'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCompareContext } from '../Compare.context';
import { defaultSliderProps } from './CompareSlider.props';

export const CompareSlider = withComponent({
    name: 'Compare.Slider',
    defaultProps: defaultSliderProps,
    setup() {
        const compare = useCompareContext();

        return { compare };
    },
    render(instance) {
        const { props, ptmi, compare } = instance;

        const isHorizontal = compare?.props.orientation === 'horizontal';
        const value = Number(compare?.state.value ?? 50);
        const positionValue = isHorizontal ? value : 100 - value;
        const sliderProps = mergeProps(
            {
                className: compare?.cx('slider', { disabled: compare?.props.disabled }),
                style: {
                    position: 'absolute',
                    inset: 0,
                    transform: isHorizontal ? `translateX(-50%)` : `translateY(-50%)`,
                    insetInlineStart: isHorizontal ? `${positionValue}%` : undefined,
                    insetBlockStart: isHorizontal ? undefined : `${positionValue}%`,
                    ...compare?.sx('slider')
                },
                'data-orientation': compare?.props.orientation,
                'data-dragging': compare?.state.isDragging
            },
            compare?.ptm('slider'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={sliderProps} children={props.children} />;
    }
});
