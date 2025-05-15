'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './DividerContent.props';

export const DividerContent = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, ptmi, getParent } = instance;
        const divider = getParent('Divider');

        const contentProps = mergeProps(
            {
                className: divider?.cx('content')
            },
            divider?.ptm('content'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...contentProps}>
                {props.children}
            </Component>
        );
    }
});
