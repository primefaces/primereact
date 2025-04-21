'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './ToolbarEnd.props';

export const ToolbarEnd = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const toolbar = getParent('Toolbar');

        const endProps = mergeProps(
            {
                className: toolbar?.cx('end')
            },
            toolbar?.ptm('end'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...endProps}>
                {props.children}
            </Component>
        );
    }
});
