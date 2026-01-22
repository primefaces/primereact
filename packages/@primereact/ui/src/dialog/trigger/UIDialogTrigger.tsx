'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Button } from '@primereact/ui/button';
import { mergeDefaultProps } from '@primeuix/utils';
import { DialogTrigger, defaultTriggerProps } from 'primereact/dialog';
import * as React from 'react';

export const UIDialogTrigger = withComponent({
    name: 'UIDialogTrigger',
    defaultProps: defaultTriggerProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={DialogTrigger} attrs={rootProps} />;
    }
});
