'use client';
import { Component, withComponent } from '@primereact/core/component';
import { cn, mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './ChipIcon.props';

export const ChipIcon = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent } = instance;
        const chip = getParent('Chip');

        const iconProps = mergeProps(
            {
                className: cn(props.className, chip?.cx('icon'))
            },
            chip?.ptm('icon')
        );

        return (
            <Component as={props.as || 'span'} {...iconProps}>
                {!props.className && props.children}
            </Component>
        );
    }
});
