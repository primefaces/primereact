'use client';
import { Component, withComponent } from '@primereact/core/component';
import { DialogClose } from '@primereact/ui/dialog';
import { mergeDefaultProps } from '@primeuix/utils';
import { ConfirmDialogClose, defaultCloseProps } from 'primereact/confirmdialog';
import * as React from 'react';

export const UIConfirmDialogClose = withComponent({
    name: 'ConfirmDialog.Close',
    defaultProps: defaultCloseProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: DialogClose }, instance.inProps);

        return <Component as={ConfirmDialogClose} attrs={rootProps} />;
    }
});
