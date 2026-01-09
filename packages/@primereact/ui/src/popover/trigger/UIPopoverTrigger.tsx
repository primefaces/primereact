'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { Button } from '@primereact/ui/button';
import { defaultTriggerProps, PopoverTrigger } from 'primereact/popover';
import * as React from 'react';

export const UIPopoverTrigger = withComponent({
    name: 'UIPopoverTrigger',
    defaultProps: defaultTriggerProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={PopoverTrigger} attrs={rootProps} />;
    }
});
