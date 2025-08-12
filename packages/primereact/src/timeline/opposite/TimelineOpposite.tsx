'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTimelineContext } from '../Timeline.context';
import { TimelineOppositeProvider } from './TimelineOpposite.context';
import { defaultOppositeProps } from './TimelineOpposite.props';

export const TimelineOpposite = withComponent({
    name: 'TimelineOpposite',
    defaultProps: defaultOppositeProps,
    setup() {
        const timeline = useTimelineContext();

        return { timeline };
    },
    render(instance) {
        const { props, ptmi, timeline } = instance;

        const rootProps = mergeProps(
            {
                className: timeline?.cx('opposite')
            },
            timeline?.ptm('opposite'),
            ptmi('root')
        );

        return (
            <TimelineOppositeProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </TimelineOppositeProvider>
        );
    }
});
