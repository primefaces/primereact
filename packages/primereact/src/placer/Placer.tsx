'use client';
import { Component } from '@primereact/core/component';
import { usePlacer } from '@primereact/headless/placer';
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
            // @ts-expect-error - Temporary fix for elementRef property access
            <PlacerProvider value={instance}>
                {/* @ts-expect-error - Temporary fix for elementRef property access */}
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </PlacerProvider>
        );
    },
    components: {
        Arrow: PlacerArrow,
        Anchor: PlacerAnchor
    }
});
