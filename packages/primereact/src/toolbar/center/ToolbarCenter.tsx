'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './ToolbarCenter.props';

export const ToolbarCenter = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const toolbar = getParent('Toolbar');

        const centerProps = mergeProps(
            {
                className: toolbar?.cx('center')
            },
            toolbar?.ptm('center'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...centerProps}>
                {props.children}
            </Component>
        );
    }
});
