'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/inputgroup';
import { withComponent } from '@primereact/ui/base';
import { InputGroupRoot, defaultRootProps } from 'primereact/inputgroup';
import * as React from 'react';

export const UIInputGroupRoot = withComponent({
    name: 'UIInputGroupRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={InputGroupRoot} attrs={rootProps} />;
    }
});
