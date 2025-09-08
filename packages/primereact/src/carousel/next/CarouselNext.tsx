'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useCarouselContext } from '../Carousel.context';
import { defaultNextProps } from './CarouselNext.props';

export const CarouselNext = withComponent({
    name: 'CarouselNext',
    defaultProps: defaultNextProps,
    setup() {
        const carousel = useCarouselContext();

        return { carousel };
    },
    render(instance) {
        const { props, ptmi, carousel } = instance;

        const disabled = carousel?.state.nextDisabled;
        const rootProps = mergeProps(
            {
                className: carousel?.cx('prev', { disabled }),
                onClick: carousel?.handleNext,
                disabled
            },
            carousel?.ptm('prev'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
