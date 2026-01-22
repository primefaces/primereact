'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/contextmenu';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { ContextMenuRoot, defaultRootProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuRoot = withComponent({
    name: 'UIContextMenuRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ContextMenuRoot} attrs={rootProps} />;
    }
});
