'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './InplaceContent.props';

export const InplaceContent = withComponent({
    defaultProps,
    render: ({ props, ptmi, getParent }) => {
        const inplace = getParent('Inplace');

        const contentProps = mergeProps(
            {
                className: inplace?.cx('content')
            },
            inplace?.ptm('content'),
            ptmi('root')
        );

        return inplace?.state.isActive ? (
            <Component as={props.as || 'div'} {...contentProps}>
                {props.children}
            </Component>
        ) : null;
    }
});
