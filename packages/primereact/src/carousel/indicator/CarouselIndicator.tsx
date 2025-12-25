'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
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

        const isActive = carousel?.state.page === props.page;

        const contentProps = mergeProps(
            {
                className: carousel?.cx('indicator', { active: isActive }),
                onClick: () => carousel?.scrollToPage(props.page),
                'data-active': isActive
            },
            carousel?.ptm('indicator'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={contentProps} children={props.children} />;
    }
});
