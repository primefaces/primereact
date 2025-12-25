'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useScrollAreaContext } from '../ScrollArea.context';
import { defaultThumbXProps } from './ScrollAreaThumbX.props';

export const ScrollAreaThumbX = withComponent({
    name: 'ScrollAreaThumbX',
    defaultProps: defaultThumbXProps,
    setup() {
        const scrollarea = useScrollAreaContext();

        return { scrollarea };
    },
    render(instance) {
        const { props, ptmi, scrollarea } = instance;

        const rootProps = mergeProps(
            {
                className: scrollarea?.cx('thumbX'),
                tabIndex: 0,
                role: 'scrollbar',
                'aria-orientation': 'horizontal',
                'aria-controls': scrollarea?.id + '_content',
                'aria-valuenow': scrollarea?.lastScrollLeft,
                onMouseDown: scrollarea?.onXBarMouseDown,
                onKeyDown: scrollarea?.onKeyDown,
                onKeyUp: scrollarea?.onKeyUp,
                onFocus: scrollarea?.onFocus,
                onBlur: scrollarea?.onBlur,
                'data-pc-group-section': 'bar'
            },
            scrollarea?.ptm('thumbX'),
            ptmi('root')
        );

        return <Component ref={scrollarea?.thumbXRef} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
