'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/toaster';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { ToasterRoot, defaultRootProps, toast } from 'primereact/toaster';
import * as React from 'react';

export const UIToasterRoot = withComponent({
    name: 'Toaster.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ToasterRoot} attrs={rootProps} />;
    }
});

export const uitoast = toast;
