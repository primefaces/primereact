'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/confirmpopup';
import { withComponent } from '@primereact/ui/base';
import { ConfirmPopupRoot, defaultRootProps } from 'primereact/confirmpopup';
import * as React from 'react';

export const UIConfirmPopupRoot = withComponent({
    name: 'UIConfirmPopupRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ConfirmPopupRoot} attrs={rootProps} />;
    }
});
