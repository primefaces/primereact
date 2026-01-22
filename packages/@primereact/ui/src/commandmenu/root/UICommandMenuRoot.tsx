'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/commandmenu';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { CommandMenuRoot, defaultRootProps } from 'primereact/commandmenu';
import * as React from 'react';

export const UICommandMenuRoot = withComponent({
    name: 'CommandMenu.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={CommandMenuRoot} attrs={rootProps} />;
    }
});
