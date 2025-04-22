'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './SplitterPanel.props';

export const SplitterPanel = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const splitter = getParent('Splitter');

        const panelProps = mergeProps(
            {
                className: 'p-splitterpanel'
            },
            splitter?.ptm('panel'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...panelProps}>
                {props.children}
            </Component>
        );
    }
});
