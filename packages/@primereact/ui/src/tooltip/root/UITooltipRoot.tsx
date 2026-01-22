'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/tooltip';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { TooltipRoot, defaultRootProps } from 'primereact/tooltip';
import * as React from 'react';

export const UITooltipRoot = withComponent({
    name: 'Tooltip.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={TooltipRoot} attrs={rootProps} />;
    }
});
