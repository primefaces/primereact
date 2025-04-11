'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './InplaceClose.props';

export const InplaceClose = withComponent({
    defaultProps,
    render: ({ props, ptmi, getParent }) => {
        const inplace = getParent('Inplace');
        const closeProps = mergeProps(
            {
                onClick: inplace?.close
            },
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...closeProps}>
                {props.children}
            </Component>
        );
    }
});
