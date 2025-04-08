'use client';
import { Component, withComponent } from '@primereact/core/component';
import { styles } from '@primereact/styles/avatar';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './AvatarGroup.props';

export const AvatarGroup = withComponent({
    defaultProps,
    styles,
    render: ({ props, ptmi, cx }) => {
        const rootProps = mergeProps(
            {
                className: cx('group')
            },
            ptmi('group')
        );

        return (
            <Component as={props.as || 'div'} {...rootProps}>
                {props.children}
            </Component>
        );
    }
});
