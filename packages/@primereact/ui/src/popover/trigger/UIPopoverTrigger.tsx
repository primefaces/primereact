'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Button } from '@primereact/ui/button';
import { mergeDefaultProps } from '@primeuix/utils';
import { defaultTriggerProps, PopoverTrigger } from 'primereact/popover';
import * as React from 'react';

export const UIPopoverTrigger = withComponent({
    name: 'Popover.Trigger',
    defaultProps: defaultTriggerProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={PopoverTrigger} attrs={rootProps} />;
    }
});
