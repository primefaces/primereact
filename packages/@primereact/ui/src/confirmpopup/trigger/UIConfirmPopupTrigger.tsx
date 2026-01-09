'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { Button } from '@primereact/ui/button';
import { ConfirmPopupTrigger, defaultTriggerProps } from 'primereact/confirmpopup';
import * as React from 'react';

export const UIConfirmPopupTrigger = withComponent({
    name: 'UIConfirmPopupTrigger',
    defaultProps: defaultTriggerProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={ConfirmPopupTrigger} attrs={rootProps} />;
    }
});
