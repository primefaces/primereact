'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
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
                style: {
                    ...{
                        '--slides-per-page': carousel?.slidesPerPage,
                        '--spacing-items': carousel?.props.spacing + 'px',
                        '--scroll-snap-type': carousel?.resolveSnapType()
                    },
                    ...carousel?.sx('content')
                },
                onPointerDown: carousel?.onContentPointerDown,
                onPointerMove: carousel?.onContentPointerMove,
                onPointerUp: carousel?.onContentPointerUp,
                onWheel: carousel?.onContentWheel,
                'data-orientation': carousel?.props.orientation,
                'data-align': carousel?.props.align,
                ...(carousel?.props.autoSize ? { 'data-autosize': '' } : {}),
                ...(carousel?.state.swiping ? { 'data-swiping': '' } : {})
            },
            carousel?.ptm('content'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={contentProps} children={props.children} ref={carousel?.contentRef} />;
    }
});
