'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useChip } from '@primereact/headless/chip';
import { styles } from '@primereact/styles/chip';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Chip.props';
import { ChipIcon } from './icon';
import { ChipImage } from './image';
import { ChipLabel } from './label';
import { ChipRemoveIcon } from './removeicon';

export const Chip = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const chip = useChip(instance.inProps);

        return chip;
    },
    render: (instance) => {
        const {
            id,
            props,
            ptmi,
            cx,
            // element refs
            elementRef,
            visibleState
        } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return visibleState ? (
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.children}
            </Component>
        ) : null;
    },
    components: {
        Icon: ChipIcon,
        Image: ChipImage,
        Label: ChipLabel,
        RemoveIcon: ChipRemoveIcon
    }
});
