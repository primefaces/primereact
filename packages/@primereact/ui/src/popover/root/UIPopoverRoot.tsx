'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/popover';
import { withComponent } from '@primereact/ui/base';
import { PopoverRoot, defaultRootProps } from 'primereact/popover';
import * as React from 'react';

export const UIPopoverRoot = withComponent({
    name: 'UIPopoverRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={PopoverRoot} attrs={rootProps} />;
    }
});
