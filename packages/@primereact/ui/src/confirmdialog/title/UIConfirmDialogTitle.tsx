'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { DialogTitle } from '@primereact/ui/dialog';
import { ConfirmDialogTitle, defaultTitleProps } from 'primereact/confirmdialog';
import * as React from 'react';

export const UIConfirmDialogTitle = withComponent({
    name: 'UIConfirmDialogTitle',
    defaultProps: defaultTitleProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: DialogTitle }, instance.inProps);

        return <Component as={ConfirmDialogTitle} attrs={rootProps} />;
    }
});
