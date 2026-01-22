'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCarouselContext } from '../Carousel.context';
import { defaultIndicatorProps } from './CarouselIndicator.props';

export const CarouselIndicator = withComponent({
    name: 'Carousel.Indicator',
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
                onClick: () => carousel?.scrollToPage(props.page ?? 0),
                'data-orientation': carousel?.props.orientation,
                'data-align': carousel?.props.align,
                ...(isActive && { 'data-active': '' }),
                ...(carousel?.state.swiping ? { 'data-swiping': '' } : {})
            },
            carousel?.ptm('indicator'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={contentProps} children={props.children} />;
    }
});
