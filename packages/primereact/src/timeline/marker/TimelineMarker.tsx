'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTimelineContext } from '../Timeline.context';
import { TimelineMarkerProvider } from './TimelineMarker.context';
import { defaultMarkerProps } from './TimelineMarker.props';

export const TimelineMarker = withComponent({
    name: 'TimelineMarker',
    defaultProps: defaultMarkerProps,
    setup() {
        const timeline = useTimelineContext();

        return { timeline };
    },
    render(instance) {
        const { props, ptmi, timeline } = instance;

        const rootProps = mergeProps(
            {
                className: timeline?.cx('marker')
            },
            timeline?.ptm('marker'),
            ptmi('root')
        );

        return (
            <TimelineMarkerProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </TimelineMarkerProvider>
        );
    }
});
