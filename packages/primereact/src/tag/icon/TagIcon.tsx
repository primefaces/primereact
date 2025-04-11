'use client';
import { Component, withComponent } from '@primereact/core/component';
import { cn, mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './TagIcon.props';

export const TagIcon = withComponent({
    defaultProps,
    render: ({
        props,
        ptmi,
        getParent
        // element refs
        // methods
    }) => {
        const tag = getParent('Tag');
        const rootProps = mergeProps(
            {
                className: cn(tag?.cx('icon'), props.children ? null : props.icon)
            },
            tag?.ptm('icon'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'span'} {...rootProps}>
                {props.children}
            </Component>
        );
    }
});
