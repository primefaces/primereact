'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTimelineContext } from '../Timeline.context';
import { TimelineEventProvider } from './TimelineEvent.context';
import { defaultEventProps } from './TimelineEvent.props';

export const TimelineEvent = withComponent({
    name: 'TimelineEvent',
    defaultProps: defaultEventProps,
    setup() {
        const timeline = useTimelineContext();

        return { timeline };
    },
    render(instance) {
        const { props, ptmi, timeline } = instance;

        const rootProps = mergeProps(
            {
                className: timeline?.cx('event')
            },
            timeline?.ptm('event'),
            ptmi('root')
        );

        return (
            <TimelineEventProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </TimelineEventProvider>
        );
    }
});
