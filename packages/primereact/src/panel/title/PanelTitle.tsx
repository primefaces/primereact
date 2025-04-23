'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultTitleProps } from './PanelTitle.props';

export const PanelTitle = withComponent({
    name: 'PanelTitle',
    defaultProps: defaultTitleProps,
    render: (instance) => {
        const { props, ptmi, getParent } = instance;
        const panel = getParent('Panel');

        const rootProps = mergeProps(
            {
                className: panel?.cx('title')
            },
            panel?.ptm('title'),
            ptmi('root')
        );

        return <Component as={props.as} {...rootProps} children={props.children} />;
    }
});
