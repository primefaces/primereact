'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/timeline';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { TimelineRoot, defaultRootProps } from 'primereact/timeline';
import * as React from 'react';

export const UITimelineRoot = withComponent({
    name: 'TimelineRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={TimelineRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
