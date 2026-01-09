'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { DialogContent } from '@primereact/ui/dialog';
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
