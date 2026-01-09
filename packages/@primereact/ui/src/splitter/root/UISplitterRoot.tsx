'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/splitter';
import { withComponent } from '@primereact/ui/base';
import { SplitterRoot, defaultRootProps } from 'primereact/splitter';
import * as React from 'react';

export const UISplitterRoot = withComponent({
    name: 'UISplitterRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={SplitterRoot} attrs={rootProps} />;
    }
});
