'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/divider';
import { withComponent } from '@primereact/ui/base';
import { DividerRoot, defaultRootProps } from 'primereact/divider';
import * as React from 'react';

export const UIDividerRoot = withComponent({
    name: 'UIDividerRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={DividerRoot} attrs={rootProps} />;
    }
});
