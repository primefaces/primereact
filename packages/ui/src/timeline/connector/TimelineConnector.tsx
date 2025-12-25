'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTimelineContext } from '../Timeline.context';
import { TimelineConnectorProvider } from './TimelineConnector.context';
import { defaultConnectorProps } from './TimelineConnector.props';

export const TimelineConnector = withComponent({
    name: 'TimelineConnector',
    defaultProps: defaultConnectorProps,
    setup() {
        const timeline = useTimelineContext();

        return { timeline };
    },
    render(instance) {
        const { props, ptmi, timeline } = instance;

        const rootProps = mergeProps(
            {
                className: timeline?.cx('connector')
            },
            timeline?.ptm('connector'),
            ptmi('root')
        );

        return (
            <TimelineConnectorProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </TimelineConnectorProvider>
        );
    }
});
