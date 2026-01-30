'use client';
import { withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { usePopoverContext } from '../Popover.context';
import { defaultPortalProps } from './PopoverPortal.props';

export const PopoverPortal = withComponent({
    name: 'Popover.Portal',
    defaultProps: defaultPortalProps,
    setup() {
        const popover = usePopoverContext();

        return { popover };
    },
    render(instance) {
        const { props, popover, ptmi } = instance;

        const containerProps = mergeProps(
            {
                className: popover?.cx('portal')
            },
            popover?.ptm('portal'),
            ptmi('root')
        );

        return <Portal instance={instance} attrs={containerProps} children={props.children} />;
    }
});
