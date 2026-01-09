'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/dialog';
import { withComponent } from '@primereact/ui/base';
import { DialogRoot, defaultRootProps } from 'primereact/dialog';
import * as React from 'react';

export const UIDialogRoot = withComponent({
    name: 'UIDialogRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={DialogRoot} attrs={rootProps} />;
    }
});
