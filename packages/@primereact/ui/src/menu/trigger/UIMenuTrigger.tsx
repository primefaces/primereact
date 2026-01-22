'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Button } from '@primereact/ui/button';
import { mergeDefaultProps } from '@primeuix/utils';
import { MenuTrigger, defaultTriggerProps } from 'primereact/menu';
import * as React from 'react';

export const UIMenuTrigger = withComponent({
    name: 'UIMenuTrigger',
    defaultProps: defaultTriggerProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={MenuTrigger} attrs={rootProps} />;
    }
});
