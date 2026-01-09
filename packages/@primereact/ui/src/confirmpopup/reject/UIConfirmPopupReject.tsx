'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { Button } from '@primereact/ui/button';
import { ConfirmPopupReject, defaultRejectProps } from 'primereact/confirmpopup';
import * as React from 'react';

export const UIConfirmPopupReject = withComponent({
    name: 'UIConfirmPopupReject',
    defaultProps: defaultRejectProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={ConfirmPopupReject} attrs={rootProps} />;
    }
});
