'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './ToolbarStart.props';

export const ToolbarStart = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const toolbar = getParent('Toolbar');

        const startProps = mergeProps(
            {
                className: toolbar?.cx('start')
            },
            toolbar?.ptm('start'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...startProps}>
                {props.children}
            </Component>
        );
    }
});
