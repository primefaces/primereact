'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/switch';
import { withComponent } from '@primereact/ui/base';
import { SwitchRoot, defaultRootProps } from 'primereact/switch';
import * as React from 'react';

export const UISwitchRoot = withComponent({
    name: 'UISwitchRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={SwitchRoot} attrs={rootProps} />;
    }
});
