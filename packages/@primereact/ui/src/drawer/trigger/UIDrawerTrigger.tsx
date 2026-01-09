'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { Button } from '@primereact/ui/button';
import { DrawerTrigger, defaultTriggerProps } from 'primereact/drawer';
import * as React from 'react';

export const UIDrawerTrigger = withComponent({
    name: 'UIDrawerTrigger',
    defaultProps: defaultTriggerProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={DrawerTrigger} attrs={rootProps} />;
    }
});
