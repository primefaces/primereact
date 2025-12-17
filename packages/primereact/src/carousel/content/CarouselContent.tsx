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
                className: carousel?.cx('content'),
                style: { ...carousel?.contentStyles, ...carousel?.sx('content') },
                onPointerDown: carousel?.onContentPointerDown,
                onPointerMove: carousel?.onContentPointerMove,
                onPointerUp: carousel?.onContentPointerUp,
                onWheel: carousel?.onContentWheel
            },
            carousel?.ptm('content'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={contentProps} children={props.children} ref={carousel?.contentRef} />;
    }
});
