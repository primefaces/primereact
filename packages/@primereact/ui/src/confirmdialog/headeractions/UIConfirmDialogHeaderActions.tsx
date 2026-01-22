'use client';
import { Component, withComponent } from '@primereact/core/component';
import { DialogHeaderActions } from '@primereact/ui/dialog';
import { mergeDefaultProps } from '@primeuix/utils';
import { ConfirmDialogHeaderActions, defaultHeaderActionsProps } from 'primereact/confirmdialog';
import * as React from 'react';

export const UIConfirmDialogHeaderActions = withComponent({
    name: 'UIConfirmDialogHeaderActions',
    defaultProps: defaultHeaderActionsProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: DialogHeaderActions }, instance.inProps);

        return <Component as={ConfirmDialogHeaderActions} attrs={rootProps} />;
    }
});
