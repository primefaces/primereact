'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/speeddial';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { SpeedDialRoot, defaultRootProps } from 'primereact/speeddial';
import * as React from 'react';

export const UISpeedDialRoot = withComponent({
    name: 'SpeedDial.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={SpeedDialRoot} attrs={rootProps} />;
    }
});
