'use client';
import { Component, withComponent } from '@primereact/core/component';
import { DialogFooter } from '@primereact/ui/dialog';
import { mergeDefaultProps } from '@primeuix/utils';
import { ConfirmDialogFooter, defaultFooterProps } from 'primereact/confirmdialog';
import * as React from 'react';

export const UIConfirmDialogFooter = withComponent({
    name: 'UIConfirmDialogFooter',
    defaultProps: defaultFooterProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: DialogFooter }, instance.inProps);

        return <Component as={ConfirmDialogFooter} attrs={rootProps} />;
    }
});
