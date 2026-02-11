'use client';
import { styles } from '@primereact/styles/popover';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { PopoverRoot, defaultRootProps } from 'primereact/popover';
import * as React from 'react';

export const UIPopoverRoot = withComponent({
    name: 'Popover.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        // @ts-expect-error - children is not defined in the props, but we need to extract it to pass the rest of the props to the root component.
        const { children, ...restProps } = instance.inProps;
        const rootProps = mergeDefaultProps({ styles }, restProps);

        return <PopoverRoot {...rootProps}>{children}</PopoverRoot>;
    }
});
