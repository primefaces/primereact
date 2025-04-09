'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useAvatar } from '@primereact/headless/avatar';
import { styles } from '@primereact/styles/avatar';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Avatar.props';
import { AvatarFallback } from './fallback';
import { AvatarGroup } from './group';
import { AvatarImage } from './image';

export const Avatar = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const avatar = useAvatar(instance.inProps);

        return avatar;
    },
    render: ({
        id,
        props,
        ptmi,
        cx,
        // element refs
        elementRef
    }) => {
        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.children}
            </Component>
        );
    },
    components: {
        Group: AvatarGroup,
        Image: AvatarImage,
        Fallback: AvatarFallback
    }
});
