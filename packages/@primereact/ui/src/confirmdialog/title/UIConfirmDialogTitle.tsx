'use client';
import { Component, withComponent } from '@primereact/core/component';
import { DialogTitle } from '@primereact/ui/dialog';
import { mergeDefaultProps } from '@primeuix/utils';
import { ConfirmDialogTitle, defaultTitleProps } from 'primereact/confirmdialog';
import * as React from 'react';

export const UIConfirmDialogTitle = withComponent({
    name: 'ConfirmDialog.Title',
    defaultProps: defaultTitleProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: DialogTitle }, instance.inProps);

        return <Component as={ConfirmDialogTitle} attrs={rootProps} />;
    }
});
