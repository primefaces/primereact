'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useCarouselContext } from '../Carousel.context';
import { defaultIndicatorProps } from './CarouselIndicator.props';

export const CarouselIndicator = withComponent({
    name: 'CarouselIndicator',
    defaultProps: defaultIndicatorProps,
    setup() {
        const carousel = useCarouselContext();

        return { carousel };
    },
    render(instance) {
        const { props, ptmi, carousel } = instance;

        const contentProps = mergeProps(
            {
                className: carousel?.cx('indicator', { active: props.index === carousel?.state?.activeIndex }),
                onClick: () => carousel?.slideTo(undefined, props.snap)
            },
            carousel?.ptm('indicator'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={contentProps} children={props.children} />;
    }
});
