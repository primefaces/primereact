'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './AvatarImage.props';

export const AvatarImage = withComponent({
    defaultProps,
    render: ({ props, attrs, ptmi, getParent }) => {
        const avatar = getParent('Avatar');

        React.useLayoutEffect(() => {
            avatar?.handleImageLoad?.(attrs.src);

            return () => {
                avatar?.handleImageLoad?.(attrs.src);
            };
        }, [attrs.src]);

        const imageProps = mergeProps(
            {
                className: avatar?.cx('image')
            },
            avatar?.ptm('image'),
            ptmi('root')
        );

        return avatar?.state.onImageLoaded ? <Component as={props.as || 'img'} {...imageProps} /> : null;
    }
});
