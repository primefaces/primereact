'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/dataview';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { DataView, defaultRootProps } from 'primereact/dataview';
import * as React from 'react';

export const UIDataViewRoot = withComponent({
    name: 'DataView.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={DataView} attrs={rootProps} />;
    }
});
