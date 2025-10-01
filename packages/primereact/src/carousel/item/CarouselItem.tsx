'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
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
        const { props, ptmi, carousel } = instance;

        const rootProps = mergeProps(
            {
                className: carousel?.cx('item'),
                style: {
                    '--p-slide-size': `${props.size}%`
                }
            },
            carousel?.ptm('item'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} ref={carousel?.addSlideRef} />;
    }
});
