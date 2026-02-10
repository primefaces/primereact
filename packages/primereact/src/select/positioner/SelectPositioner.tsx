'use client';
import { Component, withComponent } from '@primereact/core/component';
import { usePositioner } from '@primereact/headless/positioner';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultPositionerProps } from './SelectPositioner.props';

export const SelectPositioner = withComponent({
    name: 'Select.Positioner',
    defaultProps: defaultPositionerProps,
    setup({ props }) {
        const select = useSelectContext();

        const positioner = usePositioner({
            align: props.align,
            side: props.side,
            sideOffset: props.sideOffset,
            alignOffset: props.alignOffset,
            flip: props.flip,
            shift: props.shift,
            hideWhenDetached: props.hideWhenDetached,
            anchor: select?.state.anchorEl,
            content: select?.state.positionerEl,
            arrow: null
        });

        return { select, positioner };
    },
    render(instance) {
        const { props, select, ptmi } = instance;

        const rootProps = mergeProps(
            {
                className: select?.cx('positioner')
            },
            select?.ptm('positioner'),
            ptmi('root')
        );

        return <Component pIf={select?.presence?.present} instance={instance} attrs={rootProps} children={props.children} ref={select?.setPositionerRef} />;
    }
});
