'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePlacerContext } from '../Placer.context';
import { defaultAnchorProps } from './PlacerAnchor.props';

export const PlacerAnchor = withComponent({
    name: 'PlacerAnchor',
    defaultProps: defaultAnchorProps,
    setup() {
        const placer = usePlacerContext();

        return { placer };
    },
    render(instance) {
        const { props, ptmi, placer } = instance;

        const rootProps = mergeProps(
            {
                'data-side': placer?.state?.effectiveSide,
                'data-align': placer?.state?.effectiveAlign
            },
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} ref={placer?.anchorRef} />;
    }
});
