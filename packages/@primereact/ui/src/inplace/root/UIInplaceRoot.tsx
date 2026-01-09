'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/inplace';
import { withComponent } from '@primereact/ui/base';
import { InplaceRoot, defaultRootProps } from 'primereact/inplace';
import * as React from 'react';

export const UIInplaceRoot = withComponent({
    name: 'UIInplaceRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={InplaceRoot} attrs={rootProps} />;
    }
});
