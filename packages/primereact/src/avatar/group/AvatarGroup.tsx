'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './AvatarGroup.props';

export const AvatarGroup = withComponent({
    defaultProps,
    render: ({ props, ptmi, getParent }) => {
        const avatar = getParent('Avatar');
        const rootProps = mergeProps(
            {
                className: avatar?.cx('group')
            },
            avatar?.ptm('group'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...rootProps}>
                {props.children}
            </Component>
        );
    }
});
