'use client';
import { Component, withComponent } from '@primereact/core/component';
import { DialogTrigger } from '@primereact/ui/dialog';
import { mergeDefaultProps } from '@primeuix/utils';
import { ConfirmDialogTrigger, defaultTriggerProps } from 'primereact/confirmdialog';
import * as React from 'react';

export const UIConfirmDialogTrigger = withComponent({
    name: 'ConfirmDialog.Trigger',
    defaultProps: defaultTriggerProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: DialogTrigger }, instance.inProps);

        return <Component as={ConfirmDialogTrigger} attrs={rootProps} />;
    }
});
