'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Button } from '@primereact/ui/button';
import { mergeDefaultProps } from '@primeuix/utils';
import { ConfirmDialogAction, defaultActionProps } from 'primereact/confirmdialog';
import * as React from 'react';

export const UIConfirmDialogAction = withComponent({
    name: 'UIConfirmDialogAction',
    defaultProps: defaultActionProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={ConfirmDialogAction} attrs={rootProps} />;
    }
});
