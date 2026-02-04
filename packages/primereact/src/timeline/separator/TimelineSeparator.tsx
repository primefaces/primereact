'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTimelineContext } from '../Timeline.context';
import { defaultSeparatorProps } from './TimelineSeparator.props';

export const TimelineSeparator = withComponent({
    name: 'Timeline.Separator',
    defaultProps: defaultSeparatorProps,
    setup() {
        const timeline = useTimelineContext();

        return { timeline };
    },
    render(instance) {
        const { props, ptmi, timeline } = instance;

        const rootProps = mergeProps(
            {
                className: timeline?.cx('separator')
            },
            timeline?.ptm('separator'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
