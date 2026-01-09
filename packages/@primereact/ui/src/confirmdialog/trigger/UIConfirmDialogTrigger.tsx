'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { DialogTrigger } from '@primereact/ui/dialog';
import { ConfirmDialogTrigger, defaultTriggerProps } from 'primereact/confirmdialog';
import * as React from 'react';

export const UIConfirmDialogTrigger = withComponent({
    name: 'UIConfirmDialogTrigger',
    defaultProps: defaultTriggerProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: DialogTrigger }, instance.inProps);

        return <Component as={ConfirmDialogTrigger} attrs={rootProps} />;
    }
});
