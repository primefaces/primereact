'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { Button } from '@primereact/ui/button';
import { ConfirmPopupAccept, defaultAcceptProps } from 'primereact/confirmpopup';
import * as React from 'react';

export const UIConfirmPopupAccept = withComponent({
    name: 'UIConfirmPopupAccept',
    defaultProps: defaultAcceptProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={ConfirmPopupAccept} attrs={rootProps} />;
    }
});
