'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Button } from '@primereact/ui/button';
import { mergeDefaultProps } from '@primeuix/utils';
import { DrawerTrigger, defaultTriggerProps } from 'primereact/drawer';
import * as React from 'react';

export const UIDrawerTrigger = withComponent({
    name: 'Drawer.Trigger',
    defaultProps: defaultTriggerProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={DrawerTrigger} attrs={rootProps} />;
    }
});
