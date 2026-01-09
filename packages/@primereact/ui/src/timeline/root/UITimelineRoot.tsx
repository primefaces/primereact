'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/timeline';
import { withComponent } from '@primereact/ui/base';
import { TimelineRoot, defaultRootProps } from 'primereact/timeline';
import * as React from 'react';

export const UITimelineRoot = withComponent({
    name: 'UITimelineRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={TimelineRoot} attrs={rootProps} />;
    }
});
