'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { Button } from '@primereact/ui/button';
import { DialogClose, defaultCloseProps } from 'primereact/dialog';
import * as React from 'react';

export const UIDialogClose = withComponent({
    name: 'UIDialogClose',
    defaultProps: defaultCloseProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={DialogClose} attrs={rootProps} />;
    }
});
