'use client';
import { Component, withComponent } from '@primereact/core/component';
import { CollapsibleTrigger } from '@primereact/ui/collapsible';
import { mergeDefaultProps } from '@primeuix/utils';
import { PanelTrigger, defaultTriggerProps } from 'primereact/panel';
import * as React from 'react';

export const UIPanelTrigger = withComponent({
    name: 'Panel.Trigger',
    defaultProps: defaultTriggerProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: CollapsibleTrigger }, instance.inProps);

        return <Component as={PanelTrigger} attrs={rootProps} />;
    }
});
