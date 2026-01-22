'use client';
import { Component, withComponent } from '@primereact/core/component';
import { DialogContent } from '@primereact/ui/dialog';
import { mergeDefaultProps } from '@primeuix/utils';
import { ConfirmDialogContent, defaultContentProps } from 'primereact/confirmdialog';
import * as React from 'react';

export const UIConfirmDialogContent = withComponent({
    name: 'UIConfirmDialogContent',
    defaultProps: defaultContentProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: DialogContent }, instance.inProps);

        return <Component as={ConfirmDialogContent} attrs={rootProps} />;
    }
});
