'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/tree';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { TreeRoot, defaultRootProps } from 'primereact/tree';
import * as React from 'react';

export const UITreeRoot = withComponent({
    name: 'UITreeRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={TreeRoot} attrs={rootProps} />;
    }
});
