'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/metergroup';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { MeterGroupRoot, defaultRootProps } from 'primereact/metergroup';
import * as React from 'react';

export const UIMeterGroupRoot = withComponent({
    name: 'MeterGroup.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={MeterGroupRoot} attrs={rootProps} />;
    }
});
