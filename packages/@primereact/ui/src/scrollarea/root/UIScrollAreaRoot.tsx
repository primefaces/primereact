'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/scrollarea';
import { withComponent } from '@primereact/ui/base';
import { ScrollAreaRoot, defaultRootProps } from 'primereact/scrollarea';
import * as React from 'react';

export const UIScrollAreaRoot = withComponent({
    name: 'UIScrollAreaRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ScrollAreaRoot} attrs={rootProps} />;
    }
});
