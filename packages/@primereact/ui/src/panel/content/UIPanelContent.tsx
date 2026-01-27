'use client';
import { Component, withComponent } from '@primereact/core/component';
import { CollapsibleContent } from '@primereact/ui/collapsible';
import { mergeDefaultProps } from '@primeuix/utils';
import { PanelContent, defaultContentProps } from 'primereact/panel';
import * as React from 'react';

export const UIPanelContent = withComponent({
    name: 'Panel.Content',
    defaultProps: defaultContentProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: CollapsibleContent }, instance.inProps);

        return <Component as={PanelContent} attrs={rootProps} />;
    }
});
