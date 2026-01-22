'use client';
import { Component, withComponent } from '@primereact/core/component';
import { DialogHeader } from '@primereact/ui/dialog';
import { mergeDefaultProps } from '@primeuix/utils';
import { ConfirmDialogHeader, defaultHeaderProps } from 'primereact/confirmdialog';
import * as React from 'react';

export const UIConfirmDialogHeader = withComponent({
    name: 'ConfirmDialog.Header',
    defaultProps: defaultHeaderProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: DialogHeader }, instance.inProps);

        return <Component as={ConfirmDialogHeader} attrs={rootProps} />;
    }
});
