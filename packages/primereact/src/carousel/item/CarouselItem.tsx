'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCarouselContext } from '../Carousel.context';
import { defaultItemProps } from './CarouselItem.props';

export const CarouselItem = withComponent({
    name: 'CarouselItem',
    defaultProps: defaultItemProps,
    setup() {
        const carousel = useCarouselContext();

        return { carousel };
    },
    render(instance) {
        const { id, props, ptmi, carousel } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: carousel?.cx('item'),
                style: {
                    ...(carousel?.itemStyles || {}),
                    ...(carousel?.sx('item') || {})
                },
                'data-value': props.value,
                'data-item': '',
                'data-inview': 'false'
            },
            carousel?.ptm('item'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
