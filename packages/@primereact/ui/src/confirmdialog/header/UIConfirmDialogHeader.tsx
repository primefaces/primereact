'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { DialogHeader } from '@primereact/ui/dialog';
import { ConfirmDialogHeader, defaultHeaderProps } from 'primereact/confirmdialog';
import * as React from 'react';

export const UIConfirmDialogHeader = withComponent({
    name: 'UIConfirmDialogHeader',
    defaultProps: defaultHeaderProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: DialogHeader }, instance.inProps);

        return <Component as={ConfirmDialogHeader} attrs={rootProps} />;
    }
});
