'use client';
import { Component, withComponent } from '@primereact/core/component';
import { TimesCircleIcon } from '@primereact/icons/timescircle';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './ChipRemoveIcon.props';

export const ChipRemoveIcon = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const chip = getParent('Chip');

        const removeIconProps = mergeProps(
            {
                className: chip?.cx('removeIcon'),
                tabIndex: 0,
                onClick: chip?.close,
                onKeyDown: chip?.onKeyDown
            },
            chip?.ptm('removeIcon'),
            ptmi('root')
        );

        return props.asChild ? (
            <Component as={props.as || 'span'} {...removeIconProps}>
                {props.children}
            </Component>
        ) : (
            <TimesCircleIcon {...removeIconProps} />
        );
    }
});
