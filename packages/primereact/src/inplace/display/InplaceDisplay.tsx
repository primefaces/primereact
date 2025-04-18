'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './InplaceDisplay.props';

export const InplaceDisplay = withComponent({
    defaultProps,
    render: ({ props, ptmi, getParent }) => {
        const inplace = getParent('Inplace');

        const displayProps = mergeProps(
            {
                className: inplace?.cx('display'),
                onClick: inplace?.open
            },
            inplace?.ptm('display'),
            ptmi('root')
        );

        return !inplace?.state.isActive ? (
            <Component as={props.as || 'div'} {...displayProps}>
                {props.children}
            </Component>
        ) : null;
    }
});
