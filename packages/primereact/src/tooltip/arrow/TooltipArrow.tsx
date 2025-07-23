'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils/mergeprops';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTooltipContext } from '../Tooltip.context';
import { defaultArrowProps } from './TooltipArrow.props';

export const TooltipArrow = withComponent({
    name: 'TooltipArrow',
    defaultProps: defaultArrowProps,
    setup() {
        const tooltip = useTooltipContext();

        return { tooltip };
    },
    render(instance) {
        const { props, ptmi, tooltip } = instance;

        const rootProps = mergeProps(
            {
                className: tooltip?.cx('arrow'),
                'data-side': tooltip?.placer?.state?.effectiveSide,
                'data-align': tooltip?.placer?.state?.effectiveAlign,
                'data-open': tooltip?.state?.visible,
                'data-closed': !tooltip?.state?.visible
            },
            tooltip?.ptm('arrow'),
            ptmi('root')
        );

        return (
            <div ref={tooltip?.placer?.arrowRef as React.RefObject<HTMLDivElement>}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </div>
        );
    }
});
