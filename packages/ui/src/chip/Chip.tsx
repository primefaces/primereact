'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useChip } from '@primereact/headless/chip';
import { styles } from '@primereact/styles/chip';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ChipProvider } from './Chip.context';
import { defaultProps } from './Chip.props';
import { ChipIcon } from './icon';
import { ChipImage } from './image';
import { ChipLabel } from './label';
import { ChipRemoveIcon } from './removeicon';

export const Chip = withComponent({
    name: 'Chip',
    defaultProps,
    styles,
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
    },
    components: {
        Icon: ChipIcon,
        Image: ChipImage,
        Label: ChipLabel,
        RemoveIcon: ChipRemoveIcon
    }
});
