'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTimelineContext } from '../Timeline.context';
import { TimelineContentProvider } from './TimelineContent.context';
import { defaultContentProps } from './TimelineContent.props';

export const TimelineContent = withComponent({
    name: 'TimelineContent',
    defaultProps: defaultContentProps,
    setup() {
        const timeline = useTimelineContext();

        return { timeline };
    },
    render(instance) {
        const { props, ptmi, timeline } = instance;

        const rootProps = mergeProps(
            {
                className: timeline?.cx('content')
            },
            timeline?.ptm('content'),
            ptmi('root')
        );

        return (
            <TimelineContentProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </TimelineContentProvider>
        );
    }
});
