'use client';
import { Component, withComponent } from '@primereact/core/component';
import { cn, mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './AvatarFallback.props';

export const AvatarFallback = withComponent({
    defaultProps,
    render: ({ props, ptmi, getParent }) => {
        const avatar = getParent('Avatar');

        const createLabelProps = () => {
            if (!props?.label) return;

            const labelProps = mergeProps(
                {
                    className: avatar?.cx('label')
                },
                avatar?.ptm('label'),
                ptmi('root')
            );

            return labelProps;
        };

        const createIconProps = () => {
            if (!props?.icon) return;

            const iconProps = mergeProps(
                {
                    className: cn(avatar?.cx('icon'), props.icon)
                },
                avatar?.ptm('icon'),
                ptmi('root')
            );

            return iconProps;
        };

        const labelProps = createLabelProps();
        const iconProps = createIconProps();

        return !avatar?.state.onImageLoaded ? (
            <Component as={props.as || 'span'} {...(labelProps ?? iconProps ?? props)}>
                {props.label ?? props.children}
            </Component>
        ) : null;
    }
});
