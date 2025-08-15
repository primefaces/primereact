'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTimelineContext } from '../Timeline.context';
import { TimelineSeparatorProvider } from './TimelineSeparator.context';
import { defaultSeparatorProps } from './TimelineSeparator.props';

export const TimelineSeparator = withComponent({
    name: 'TimelineSeparator',
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

        return (
            <TimelineSeparatorProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </TimelineSeparatorProvider>
        );
    }
});
