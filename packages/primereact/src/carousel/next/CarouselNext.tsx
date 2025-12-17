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

        const disabled = carousel?.state.isNextDisabled || props.disabled;
        const rootProps = mergeProps(
            {
                className: carousel?.cx('next', { disabled }),
                onClick: carousel?.next,
                disabled
            },
            carousel?.ptm('prev'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
