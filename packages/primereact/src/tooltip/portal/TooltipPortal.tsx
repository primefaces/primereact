'use client';
import { Motion } from '@primereact/core/motion';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { useTooltipContext } from '../Tooltip.context';
import { defaultPortalProps } from './TooltipPortal.props';

export const TooltipPortal = withComponent({
    name: 'TooltipPortal',
    defaultProps: defaultPortalProps,
    setup() {
        const tooltip = useTooltipContext();

        return { tooltip };
    },
    render(instance) {
        const { props, tooltip, ptmi } = instance;

        const rootProps = mergeProps({}, ptmi('root'));

        const motionProps = mergeProps({
            in: tooltip?.state.life,
            onEnter: tooltip?.onEnter,
            onBeforeEnter: tooltip?.onBeforeEnter,
            onAfterLeave: tooltip?.onAfterLeave,
            onLeave: tooltip?.onLeave,
            onClick: tooltip?.onOverlayClick,
            'data-open': tooltip?.state?.visible,
            'data-closed': !tooltip?.state?.visible
        });

        return (
            <Portal {...rootProps}>
                <Motion {...motionProps} ref={tooltip?.placer?.containerRef} children={props.children} />
            </Portal>
        );
    }
});
