'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCarouselContext } from '../Carousel.context';
import { defaultPrevProps } from './CarouselPrev.props';

export const CarouselPrev = withComponent({
    name: 'CarouselPrev',
    defaultProps: defaultPrevProps,
    setup() {
        const carousel = useCarouselContext();

        return { carousel };
    },
    render(instance) {
        const { props, ptmi, carousel } = instance;

        const disabled = carousel?.state.isPrevDisabled || props.disabled;
        const rootProps = mergeProps(
            {
                className: carousel?.cx('prev', { disabled }),
                onClick: carousel?.prev,
                disabled
            },
            carousel?.ptm('prev'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
