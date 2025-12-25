'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useScrollAreaContext } from '../ScrollArea.context';
import { defaultViewportProps } from './ScrollAreaViewport.props';

export const ScrollAreaViewport = withComponent({
    name: 'ScrollAreaViewport',
    defaultProps: defaultViewportProps,
    setup() {
        const scrollarea = useScrollAreaContext();

        return { scrollarea };
    },
    render(instance) {
        const { props, ptmi, scrollarea } = instance;

        const rootProps = mergeProps(
            {
                className: scrollarea?.cx('viewport')
            },
            scrollarea?.ptm('viewport'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
