'use client';
import { Component, withComponent } from '@primereact/core/component';
import { styles } from '@primereact/styles/avatar';
import { cn, mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './AvatarImage.props';

export const AvatarImage = withComponent({
    defaultProps,
    styles,
    render: ({ props, ptm, cx, getParent }) => {
        const parentAvatar = getParent('Avatar');

        React.useLayoutEffect(() => {
            parentAvatar?.handleImageLoad?.(props.src);

            return () => {
                parentAvatar?.handleImageLoad?.(props.src);
            };
        }, [props.src]);

        const imageProps = mergeProps(
            {
                className: cn(cx('image'), props.className),
                src: props.src,
                alt: props.alt
            },
            ptm('image')
        );

        console.log(imageProps);

        return parentAvatar?.state.onImageLoaded ? <Component as={props.as || 'img'} {...imageProps} /> : null;
    }
});
