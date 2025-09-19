'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useCarouselContext } from '../Carousel.context';
import { defaultContentProps } from './CarouselContent.props';

export const CarouselContent = withComponent({
    name: 'CarouselContent',
    defaultProps: defaultContentProps,
    setup() {
        const carousel = useCarouselContext();

        return { carousel };
    },
    render(instance) {
        const { props, ptmi, carousel } = instance;

        const contentProps = mergeProps(
            {
                className: carousel?.cx('content', { orientation: carousel?.props.orientation }),
                style: {
                    ...({
                        '--p-swipe-amount-x': `0px`,
                        '--p-swipe-amount-y': `0px`,
                        '--p-spacing': `${carousel?.props.spacing}px`
                    } as React.CSSProperties)
                },
                onPointerDown: carousel?.handlePointerDown,
                onPointerMove: carousel?.handlePointerMove,
                onPointerUp: carousel?.handlePointerUp,
                onClick: carousel?.handleClick
            },
            carousel?.ptm('content'),
            ptmi('root')
        );

        const viewportProps = mergeProps(
            {
                className: carousel?.cx('viewport')
            },
            carousel?.ptm('viewport')
        );

        return (
            <div {...viewportProps}>
                <Component instance={instance} attrs={contentProps} children={props.children} ref={carousel?.carouselRef} />
            </div>
        );
    }
});
