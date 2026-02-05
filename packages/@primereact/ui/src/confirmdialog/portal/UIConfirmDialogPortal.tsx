'use client';
import { Component, withComponent } from '@primereact/core/component';
import { DialogPortal } from '@primereact/ui/dialog';
import { mergeDefaultProps } from '@primeuix/utils';
import { ConfirmDialogPortal, defaultPortalProps } from 'primereact/confirmdialog';
import * as React from 'react';

export const UIConfirmDialogPortal = withComponent({
    name: 'ConfirmDialog.Portal',
    defaultProps: defaultPortalProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: DialogPortal }, instance.inProps);

        return <Component as={ConfirmDialogPortal} attrs={rootProps} />;
    }
});
