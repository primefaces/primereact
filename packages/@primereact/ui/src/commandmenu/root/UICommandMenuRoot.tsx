'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/commandmenu';
import { withComponent } from '@primereact/ui/base';
import { CommandMenuRoot, defaultRootProps } from 'primereact/commandmenu';
import * as React from 'react';

export const UICommandMenuRoot = withComponent({
    name: 'UICommandMenuRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={CommandMenuRoot} attrs={rootProps} />;
    }
});
