'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Button } from '@primereact/ui/button';
import { mergeDefaultProps } from '@primeuix/utils';
import { ConfirmPopupTrigger, defaultTriggerProps } from 'primereact/confirmpopup';
import * as React from 'react';

export const UIConfirmPopupTrigger = withComponent({
    name: 'ConfirmPopup.Trigger',
    defaultProps: defaultTriggerProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={ConfirmPopupTrigger} attrs={rootProps} />;
    }
});
