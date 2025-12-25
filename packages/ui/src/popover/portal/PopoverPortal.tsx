'use client';
import { withComponent } from '@primereact/core/component';
import { Motion } from '@primereact/core/motion';
import { mergeProps } from '@primeuix/utils';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { usePopoverContext } from '../Popover.context';
import { defaultPortalProps } from './PopoverPortal.props';

export const PopoverPortal = withComponent({
    name: 'PopoverPortal',
    defaultProps: defaultPortalProps,
    setup() {
        const popover = usePopoverContext();

        return { popover };
    },
    render(instance) {
        const { props, popover, ptmi } = instance;

        const containerProps = mergeProps(
            {
                in: popover?.state.visible,
                className: popover?.cx('overlay'),
                name: 'p-popover',
                role: 'dialog',
                'aria-modal': popover?.state.visible,
                onBeforeEnter: popover?.onBeforeEnter,
                onAfterLeave: popover?.onAfterLeave,
                onLeave: popover?.onLeave,
                onClick: popover?.onOverlayClick,
                appear: true
            },
            popover?.ptm('overlay'),
            ptmi('root')
        );

        return (
            <Portal appendTo={props.appendTo}>
                <Motion {...containerProps} ref={popover?.containerRef} children={props.children} />
            </Portal>
        );
    }
});
