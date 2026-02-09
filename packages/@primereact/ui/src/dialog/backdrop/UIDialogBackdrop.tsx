'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primeuix/utils';
import { Backdrop } from 'primereact/backdrop';
import { DialogBackdrop, defaultBackdropProps } from 'primereact/dialog';
import * as React from 'react';

export const UIDialogBackdrop = withComponent({
    name: 'Dialog.Backdrop',
    defaultProps: defaultBackdropProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Backdrop }, instance.inProps);

        return <Component as={DialogBackdrop} attrs={rootProps} />;
    }
});
