'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCarouselContext } from '../Carousel.context';
import { defaultNextProps } from './CarouselNext.props';

export const CarouselNext = withComponent({
    name: 'Carousel.Next',
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
                disabled,
                'data-orientation': carousel?.props.orientation,
                'data-align': carousel?.props.align,
                'data-page': carousel?.state.page,
                'data-disabled': disabled,
                ...(carousel?.state.swiping ? { 'data-swiping': '' } : {})
            },
            carousel?.ptm('prev'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
