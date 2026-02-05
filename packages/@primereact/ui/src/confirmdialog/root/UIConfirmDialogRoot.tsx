'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/confirmdialog';
import { withComponent } from '@primereact/ui/base';
import { DialogRoot } from '@primereact/ui/dialog';
import { mergeDefaultProps } from '@primeuix/utils';
import { ConfirmDialogRoot, defaultRootProps } from 'primereact/confirmdialog';
import * as React from 'react';

export const UIConfirmDialogRoot = withComponent({
    name: 'ConfirmDialog.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps(
            {
                styles,
                as: DialogRoot
            },
            instance.inProps
        );

        return <Component as={ConfirmDialogRoot} attrs={rootProps} />;
    }
});
