'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTimelineContext } from '../Timeline.context';
import { defaultOppositeProps } from './TimelineOpposite.props';

export const TimelineOpposite = withComponent({
    name: 'Timeline.Opposite',
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

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
