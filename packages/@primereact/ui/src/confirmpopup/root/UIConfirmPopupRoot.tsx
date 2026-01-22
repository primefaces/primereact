'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/confirmpopup';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { ConfirmPopupRoot, defaultRootProps } from 'primereact/confirmpopup';
import * as React from 'react';

export const UIConfirmPopupRoot = withComponent({
    name: 'ConfirmPopup.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ConfirmPopupRoot} attrs={rootProps} />;
    }
});
