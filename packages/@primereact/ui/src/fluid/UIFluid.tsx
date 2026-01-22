'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/fluid';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { Fluid, defaultProps } from 'primereact/fluid';
import * as React from 'react';

export const UIFluid = withComponent({
    name: 'Fluid',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={Fluid} attrs={rootProps} />;
    }
});
