'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/popover';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { PopoverRoot, defaultRootProps } from 'primereact/popover';
import * as React from 'react';

export const UIPopoverRoot = withComponent({
    name: 'Popover.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={PopoverRoot} attrs={rootProps} />;
    }
});
