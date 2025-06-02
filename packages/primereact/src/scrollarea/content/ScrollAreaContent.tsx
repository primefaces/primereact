'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useScrollAreaContext } from '../ScrollArea.context';
import { defaultContentProps } from './ScrollAreaContent.props';

export const ScrollAreaContent = withComponent({
    name: 'ScrollAreaContent',
    defaultProps: defaultContentProps,
    setup() {
        const scrollarea = useScrollAreaContext();

        return { scrollarea };
    },
    render(instance) {
        const { props, ptmi, scrollarea } = instance;

        const rootProps = mergeProps(
            {
                ref: scrollarea?.contentRef,
                id: scrollarea?.id + '_content',
                className: scrollarea?.cx('content'),
                onScroll: scrollarea?.onScroll,
                onMouseEnter: scrollarea?.moveBar
            },
            scrollarea?.ptm('content'),
            ptmi('root')
        );

        return <Component ref={scrollarea?.contentRef} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
