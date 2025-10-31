'use client';
import { Motion } from '@primereact/core/motion';
import { useOverlay } from '@primereact/headless/overlay';
import { mergeProps, resolve } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { OverlayProvider } from './Overlay.context';
import { defaultProps } from './Overlay.props';

export const Overlay = withComponent({
    name: 'Overlay',
    defaultProps,
    setup: (instance) => {
        const overlay = useOverlay(instance?.inProps);

        return overlay;
    },
    render: (instance) => {
        const { id, props, ptmi, state, containerRef, onOverlayEnter, onOverlayAfterEnter, onLeave, onAfterLeave, onOverlayClick, onOverlayKeyDown } = instance;

        const containerProps = mergeProps(
            {
                id,
                in: state.visible,
                name: 'p-connected-overlay',
                onEnter: onOverlayEnter,
                onAfterEnter: onOverlayAfterEnter,
                onLeave: onLeave,
                onAfterLeave: onAfterLeave,
                onClick: onOverlayClick,
                onKeyDown: onOverlayKeyDown,
                appear: true
            },
            ptmi('root')
        );

        return (
            <OverlayProvider value={instance}>
                <Portal appendTo={props.appendTo}>
                    <Motion {...containerProps} ref={containerRef}>
                        {resolve(props.children, instance)}
                    </Motion>
                </Portal>
            </OverlayProvider>
        );
    }
});
