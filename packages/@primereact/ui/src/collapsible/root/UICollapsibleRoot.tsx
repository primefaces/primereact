'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primeuix/utils';
import { CollapsibleRoot, defaultRootProps } from 'primereact/collapsible';
import * as React from 'react';

export const UICollapsibleRoot = withComponent({
    name: 'Collapsible.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps(instance.inProps);

        return <Component as={CollapsibleRoot} attrs={rootProps} />;
    }
});
