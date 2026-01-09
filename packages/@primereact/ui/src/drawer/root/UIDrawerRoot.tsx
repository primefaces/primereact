'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/drawer';
import { withComponent } from '@primereact/ui/base';
import { DrawerRoot, defaultRootProps } from 'primereact/drawer';
import * as React from 'react';

export const UIDrawerRoot = withComponent({
    name: 'UIDrawerRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={DrawerRoot} attrs={rootProps} />;
    }
});
