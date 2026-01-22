'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Button } from '@primereact/ui/button';
import { mergeDefaultProps } from '@primeuix/utils';
import { ConfirmPopupReject, defaultRejectProps } from 'primereact/confirmpopup';
import * as React from 'react';

export const UIConfirmPopupReject = withComponent({
    name: 'ConfirmPopup.Reject',
    defaultProps: defaultRejectProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={ConfirmPopupReject} attrs={rootProps} />;
    }
});
