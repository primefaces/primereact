'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/menu';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { MenuRoot, defaultRootProps } from 'primereact/menu';
import * as React from 'react';

export const UIMenuRoot = withComponent({
    name: 'Menu.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={MenuRoot} attrs={rootProps} />;
    }
});
