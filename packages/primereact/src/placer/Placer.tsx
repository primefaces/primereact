'use client';
import { Component } from '@primereact/core/component';
import { usePlacer } from '@primereact/headless/placer';
import { styles } from '@primereact/styles/popover';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { PlacerProvider } from './Placer.context';
import { defaultProps } from './Placer.props';
import { PlacerAnchor } from './anchor';
import { PlacerArrow } from './arrow';

export const Placer = withComponent({
    name: 'Placer',
    defaultProps,
    styles,
    setup(instance) {
        const placer = usePlacer(instance.inProps);

        return placer;
    },
    render(instance) {
        const { props, ptmi, state } = instance;

        const rootProps = mergeProps(
            {
                'data-side': state?.effectiveSide,
                'data-align': state?.effectiveAlign,
                style: {
                    position: 'fixed',
                    left: '0',
                    top: '0',
                    willChange: 'transform'
                }
            },
            ptmi('root')
        );

        return (
            <PlacerProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </PlacerProvider>
        );
    },
    components: {
        Arrow: PlacerArrow,
        Anchor: PlacerAnchor
    }
});

// const porp={
//     in: props.in,
//                 enterFromClassName: props.shouldAnimateOnEnter ? props.enterFromClassName : undefined,
//                 enterToClassName: props.shouldAnimateOnEnter ? props.enterToClassName : undefined,
//                 enterActiveClassName: props.shouldAnimateOnEnter ? props.enterActiveClassName : undefined,
//                 leaveFromClassName: props.shouldAnimateOnLeave ? props.leaveFromClassName : undefined,
//                 leaveToClassName: props.shouldAnimateOnLeave ? props.leaveToClassName : undefined,
//                 leaveActiveClassName: props.shouldAnimateOnLeave ? props.leaveActiveClassName : undefined,
//                 onBeforeEnter: (e: Element | undefined) => {
//                     props?.onBeforeEnter?.(e);
//                     placer?.onBeforeEnter?.(e);
//                 },
//                 onLeave: () => {
//                     placer?.onLeave?.();
//                     props?.onLeave?.();
//                 },
//                 onEnter: () => {
//                     placer?.onEnter?.();
//                     props?.onEnter?.();
//                 },
//                 onBeforeLeave: () => {
//                     placer?.onBeforeLeave?.();
//                     props?.onBeforeLeave?.();
//                 },
// }
