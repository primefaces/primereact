'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useTimeline } from '@primereact/headless/timeline';
import { styles } from '@primereact/styles/timeline';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { TimelineProvider } from './Timeline.context';
import { defaultProps } from './Timeline.props';
import { TimelineConnector } from './connector';
import { TimelineContent } from './content';
import { TimelineEvent } from './event';
import { TimelineMarker } from './marker';
import { TimelineOpposite } from './opposite';
import { TimelineSeparator } from './separator';

export const Timeline = withComponent({
    name: 'Timeline',
    defaultProps,
    styles,
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
    },
    components: {
        Connector: TimelineConnector,
        Content: TimelineContent,
        Event: TimelineEvent,
        Marker: TimelineMarker,
        Opposite: TimelineOpposite,
        Separator: TimelineSeparator
    }
});
