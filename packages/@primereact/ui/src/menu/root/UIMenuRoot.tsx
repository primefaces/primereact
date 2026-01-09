'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/menu';
import { withComponent } from '@primereact/ui/base';
import { MenuRoot, defaultRootProps } from 'primereact/menu';
import * as React from 'react';

export const UIMenuRoot = withComponent({
    name: 'UIMenuRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={MenuRoot} attrs={rootProps} />;
    }
});
