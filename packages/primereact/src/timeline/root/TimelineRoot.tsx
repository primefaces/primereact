'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useTimeline } from '@primereact/headless/timeline';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { TimelineProvider } from '../Timeline.context';
import { defaultRootProps } from './TimelineRoot.props';

export const TimelineRoot = withComponent({
    name: 'TimelineRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const timeline = useTimeline(instance.inProps);

        return timeline;
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
            <TimelineProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </TimelineProvider>
        );
    }
});
