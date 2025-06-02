'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useScrollAreaContext } from '../ScrollArea.context';
import { defaultThumbYProps } from './ScrollAreaThumbY.props';

export const ScrollAreaThumbY = withComponent({
    name: 'ScrollAreaThumbY',
    defaultProps: defaultThumbYProps,
    setup() {
        const scrollarea = useScrollAreaContext();

        return { scrollarea };
    },
    render(instance) {
        const { props, ptmi, scrollarea } = instance;

        const rootProps = mergeProps(
            {
                className: scrollarea?.cx('thumbY'),
                tabIndex: 0,
                role: 'scrollbar',
                'aria-orientation': 'vertical',
                'aria-controls': scrollarea?.id + '_content',
                'aria-valuenow': scrollarea?.lastScrollLeft,
                onMouseDown: scrollarea?.onYBarMouseDown,
                onKeyDown: scrollarea?.onKeyDown,
                onKeyUp: scrollarea?.onKeyUp,
                onFocus: scrollarea?.onFocus,
                onBlur: scrollarea?.onBlur,
                'data-pc-group-section': 'bar'
            },
            scrollarea?.ptm('thumbY'),
            ptmi('root')
        );

        return <Component ref={scrollarea?.thumbYRef} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
