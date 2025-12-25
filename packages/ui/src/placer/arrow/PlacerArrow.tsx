'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePlacerContext } from '../Placer.context';
import { defaultArrowProps } from './PlacerArrow.props';

export const PlacerArrow = withComponent({
    name: 'PlacerArrow',
    defaultProps: defaultArrowProps,
    setup() {
        const placer = usePlacerContext();

        return { placer };
    },
    render(instance) {
        const { props, ptmi, placer } = instance;

        const rootProps = mergeProps(
            {
                'data-side': placer?.state?.effectiveSide,
                'data-align': placer?.state?.effectiveAlign,
                style: {
                    position: 'absolute'
                }
            },
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} ref={placer?.arrowRef} />;
    }
});
