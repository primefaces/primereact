'use client';
import { Component } from '@primereact/core/component';
import { Motion } from '@primereact/core/motion';
import { mergeProps } from '@primeuix/utils/mergeprops';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTooltipContext } from '../Tooltip.context';
import { defaultContentProps } from './TooltipContent.props';

export const TooltipContent = withComponent({
    name: 'TooltipContent',
    defaultProps: defaultContentProps,
    setup() {
        const tooltip = useTooltipContext();

        return { tooltip };
    },
    render(instance) {
        const { props, ptmi, tooltip } = instance;
        const shouldAnimateOnEnter = tooltip?.state.shouldAnimateOnEnter;
        const shouldAnimateOnLeave = tooltip?.state.shouldAnimateOnLeave;
        const rootProps = mergeProps(
            {
                className: tooltip?.cx('root'),
                appear: true,
                in: tooltip?.state.visible,
                role: 'tooltip',
                'aria-modal': tooltip?.state.visible,
                enterFromClassName: shouldAnimateOnEnter ? 'p-placer-content-enter-from' : undefined,
                enterToClassName: shouldAnimateOnEnter ? 'p-placer-content-enter-to' : undefined,
                enterActiveClassName: shouldAnimateOnEnter ? 'p-placer-content-enter-active' : undefined,
                leaveFromClassName: shouldAnimateOnLeave ? 'p-placer-content-leave-from' : undefined,
                leaveToClassName: shouldAnimateOnLeave ? 'p-placer-content-leave-to' : undefined,
                leaveActiveClassName: shouldAnimateOnLeave ? 'p-placer-content-leave-active' : undefined,
                onEnter: tooltip?.onContentEnter,
                onLeave: tooltip?.onContentLeave,
                onAfterLeave: tooltip?.onContentAfterLeave,
                'data-open': tooltip?.state?.visible,
                'data-closed': !tooltip?.state?.visible
            },
            ptmi('root'),
            tooltip?.ptm('root')
        );

        return <Component as={Motion} instance={instance} attrs={rootProps} children={props.children} ref={tooltip?.contentRef as React.RefObject<HTMLDivElement | null>} />;
    }
});
