'use client';
import { Component, withComponent } from '@primereact/core/component';
import { styles } from '@primereact/styles/avatar';
import { cn, mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './AvatarFallback.props';

export const AvatarFallback = withComponent({
    defaultProps,
    styles,
    render: ({ props, ptm, cx, getParent }) => {
        const parentAvatar = getParent('Avatar');

        const createLabelProps = () => {
            if (!props?.label) return;

            const labelProps = mergeProps(
                {
                    className: cn(cx('label'), props.className)
                },
                ptm('label')
            );

            return labelProps;
        };

        const createIconProps = () => {
            if (!props?.icon) return;

            const iconProps = mergeProps(
                {
                    className: cn(cx('icon'), props.icon, props.className)
                },
                ptm('icon')
            );

            return iconProps;
        };

        const labelProps = createLabelProps();
        const iconProps = createIconProps();

        return !parentAvatar?.state.onImageLoaded ? (
            <Component as={props.as || 'span'} {...(labelProps ?? iconProps ?? props)}>
                {props.label ?? props.children}
            </Component>
        ) : null;
    }
});
