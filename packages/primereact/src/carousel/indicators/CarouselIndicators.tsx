'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useCarouselContext } from '../Carousel.context';
import { CarouselIndicator } from '../indicator/CarouselIndicator';
import { defaultIndicatorsProps } from './CarouselIndicators.props';

export const CarouselIndicators = withComponent({
    name: 'CarouselIndicators',
    defaultProps: defaultIndicatorsProps,
    setup() {
        const carousel = useCarouselContext();

        return { carousel };
    },
    render(instance) {
        const { props, ptmi, carousel } = instance;

        const contentProps = mergeProps(
            {
                className: carousel?.cx('indicators')
            },
            carousel?.ptm('indicators'),
            ptmi('root')
        );

        return (
            <Component
                instance={instance}
                attrs={contentProps}
                children={
                    props.children ?? (
                        <>
                            {Array.from(carousel?.state.snapPoints ?? []).map((_, i) => (
                                <CarouselIndicator key={i} page={i} />
                            ))}
                        </>
                    )
                }
            />
        );
    }
});
