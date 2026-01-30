'use client';
import { Component, withComponent } from '@primereact/core/component';
import { usePositioner } from '@primereact/headless/positioner';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePopoverContext } from '../Popover.context';
import { defaultPositionerProps } from './PopoverPositioner.props';

export const PopoverPositioner = withComponent({
    name: 'Popover.Positioner',
    defaultProps: defaultPositionerProps,
    setup({ props }) {
        const popover = usePopoverContext();

        const positioner = usePositioner({
            align: props.align,
            side: props.side,
            sideOffset: props.sideOffset,
            alignOffset: props.alignOffset,
            flip: props.flip,
            shift: props.shift,
            hideWhenDetached: props.hideWhenDetached,
            anchor: popover?.state.anchorEl,
            content: popover?.state.positionerEl,
            arrow: popover?.state.arrowEl
        });

        return { popover, positioner };
    },
    render(instance) {
        const { props, popover, ptmi } = instance;

        const containerProps = mergeProps(
            {
                className: popover?.cx('positioner')
            },
            popover?.ptm('positioner'),
            ptmi('root')
        );

        return <Component pIf={popover?.presence?.present} instance={instance} attrs={containerProps} children={props.children} ref={popover?.setPositionerRef} />;
    }
});
