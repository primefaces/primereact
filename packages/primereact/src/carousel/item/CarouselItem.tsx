'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCarouselContext } from '../Carousel.context';
import { defaultItemProps } from './CarouselItem.props';

export const CarouselItem = withComponent({
    name: 'Carousel.Item',
    defaultProps: defaultItemProps,
    setup() {
        const carousel = useCarouselContext();

        return { carousel };
    },
    render(instance) {
        const { id, props, ptmi, carousel } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: carousel?.cx('item'),
                style: {
                    flexGrow: 0,
                    flexShrink: 0,
                    minWidth: 0,
                    flexBasis: carousel?.props.autoSize ? 'auto' : `calc(100% / var(--slides-per-page) - var(--spacing-items) * (var(--slides-per-page) - 1) / var(--slides-per-page))`,
                    scrollSnapAlign: carousel?.props.align,
                    ...carousel?.sx('item')
                },
                'data-value': props.value,
                'data-item': '',
                'data-inview': 'false',
                'data-orientation': carousel?.props.orientation,
                'data-align': carousel?.props.align,
                'data-page': carousel?.state.page,
                ...(carousel?.state.swiping ? { 'data-swiping': '' } : {}),
                ...(carousel?.props.autoSize ? { 'data-autosize': '' } : {})
            },
            carousel?.ptm('item'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
