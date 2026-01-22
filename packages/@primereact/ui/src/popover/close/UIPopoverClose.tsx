'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Button } from '@primereact/ui/button';
import { mergeDefaultProps } from '@primeuix/utils';
import { defaultCloseProps, PopoverClose } from 'primereact/popover';
import * as React from 'react';

export const UIPopoverClose = withComponent({
    name: 'UIPopoverClose',
    defaultProps: defaultCloseProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={PopoverClose} attrs={rootProps} />;
    }
});
