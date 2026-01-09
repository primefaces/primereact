'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { DialogClose } from '@primereact/ui/dialog';
import { ConfirmDialogClose, defaultCloseProps } from 'primereact/confirmdialog';
import * as React from 'react';

export const UIConfirmDialogClose = withComponent({
    name: 'UIConfirmDialogClose',
    defaultProps: defaultCloseProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: DialogClose }, instance.inProps);

        return <Component as={ConfirmDialogClose} attrs={rootProps} />;
    }
});
