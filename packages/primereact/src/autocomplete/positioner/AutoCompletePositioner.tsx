'use client';
import { Component, withComponent } from '@primereact/core/component';
import { usePositioner } from '@primereact/headless/positioner';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useAutoCompleteContext } from '../AutoComplete.context';
import { defaultPositionerProps } from './AutoCompletePositioner.props';

export const AutoCompletePositioner = withComponent({
    name: 'AutoComplete.Positioner',
    defaultProps: defaultPositionerProps,
    setup({ props }) {
        const autocomplete = useAutoCompleteContext();

        const positioner = usePositioner({
            align: props.align,
            side: props.side,
            sideOffset: props.sideOffset,
            alignOffset: props.alignOffset,
            flip: props.flip,
            shift: props.shift,
            hideWhenDetached: props.hideWhenDetached,
            anchor: autocomplete?.state.anchorEl,
            content: autocomplete?.state.positionerEl,
            arrow: null
        });

        return { autocomplete, positioner };
    },
    render(instance) {
        const { props, autocomplete, ptmi } = instance;

        const rootProps = mergeProps(
            {
                className: autocomplete?.cx('positioner')
            },
            autocomplete?.ptm('positioner'),
            ptmi('root')
        );

        return <Component pIf={autocomplete?.presence?.present} instance={instance} attrs={rootProps} children={props.children} ref={autocomplete?.setPositionerRef} />;
    }
});
