'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultHeaderProps } from './PanelHeader.props';

export const PanelHeader = withComponent({
    name: 'PanelHeader',
    defaultProps: defaultHeaderProps,
    render: (instance) => {
        const { props, ptmi, getParent } = instance;
        const panel = getParent('Panel');

        const rootProps = mergeProps(
            {
                className: panel?.cx('header')
            },
            panel?.ptm('header'),
            ptmi('root')
        );

        return <Component as={props.as} {...rootProps} children={props.children} />;
    }
});
