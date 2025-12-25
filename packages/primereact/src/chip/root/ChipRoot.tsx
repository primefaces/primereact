'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useChip } from '@primereact/headless/chip';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ChipProvider } from '../Chip.context';
import { defaultRootProps } from './ChipRoot.props';

export const ChipRoot = withComponent({
    name: 'ChipRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const chip = useChip(instance.inProps);

        return chip;
    },
    render(instance) {
        const { id, props, state, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return state.visible ? (
            <ChipProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ChipProvider>
        ) : null;
    }
});
