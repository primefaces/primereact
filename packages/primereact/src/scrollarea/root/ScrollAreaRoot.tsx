'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useScrollArea } from '@primereact/headless/scrollarea';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ScrollAreaProvider } from '../ScrollArea.context';
import { defaultRootProps } from './ScrollAreaRoot.props';

export const ScrollAreaRoot = withComponent({
    name: 'ScrollAreaRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const scrollarea = useScrollArea(instance.inProps);

        return scrollarea;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <ScrollAreaProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ScrollAreaProvider>
        );
    }
});
