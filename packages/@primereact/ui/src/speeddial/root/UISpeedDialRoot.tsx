'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/speeddial';
import { withComponent } from '@primereact/ui/base';
import { SpeedDialRoot, defaultRootProps } from 'primereact/speeddial';
import * as React from 'react';

export const UISpeedDialRoot = withComponent({
    name: 'UISpeedDialRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={SpeedDialRoot} attrs={rootProps} />;
    }
});
