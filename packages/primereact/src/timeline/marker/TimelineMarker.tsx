'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTimelineContext } from '../Timeline.context';
import { defaultMarkerProps } from './TimelineMarker.props';

export const TimelineMarker = withComponent({
    name: 'Timeline.Marker',
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

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
