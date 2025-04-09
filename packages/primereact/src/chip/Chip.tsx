'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useChip } from '@primereact/headless/chip';
import { TimesCircleIcon } from '@primereact/icons/timescircle';
import { styles } from '@primereact/styles/chip';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Chip.props';
import { ChipIcon } from './icon';
import { ChipImage } from './image';
import { ChipLabel } from './label';

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
            ptm,
            cx,
            // element refs
            elementRef,
            // methods
            onKeyDown,
            close,
            visibleState
        } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        const createRemoveElement = () => {
            const removeIconProps = mergeProps(
                {
                    className: cx('removeIcon'),
                    tabIndex: 0,
                    onClick: close,
                    onKeyDown
                },
                ptm('removeIcon')
            );

            return <TimesCircleIcon {...removeIconProps} />;
        };

        return visibleState ? (
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.children}
                {props.removable && createRemoveElement()}
            </Component>
        ) : null;
    },
    components: {
        Icon: ChipIcon,
        Image: ChipImage,
        Label: ChipLabel
    }
});
