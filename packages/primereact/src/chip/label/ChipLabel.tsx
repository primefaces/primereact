'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './ChipLabel.props';

export const ChipLabel = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const chip = getParent('Chip');

        const labelProps = mergeProps(
            {
                className: chip?.cx('label')
            },
            chip?.ptm('label'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...labelProps}>
                {props.children}
            </Component>
        );
    }
});
