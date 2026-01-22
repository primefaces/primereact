'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Button } from '@primereact/ui/button';
import { mergeDefaultProps } from '@primeuix/utils';
import { ConfirmDialogCancel, defaultCancelProps } from 'primereact/confirmdialog';
import * as React from 'react';

export const UIConfirmDialogCancel = withComponent({
    name: 'UIConfirmDialogCancel',
    defaultProps: defaultCancelProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={ConfirmDialogCancel} attrs={rootProps} />;
    }
});
