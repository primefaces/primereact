'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultHeaderActionsProps } from './PanelHeaderActions.props';

export const PanelHeaderActions = withComponent({
    name: 'PanelHeaderActions',
    defaultProps: defaultHeaderActionsProps,
    render: (instance) => {
        const { props, ptmi, getParent } = instance;
        const panel = getParent('Panel');

        const rootProps = mergeProps(
            {
                className: panel?.cx('headerActions')
            },
            panel?.ptm('headerActions'),
            ptmi('root')
        );

        return <Component as={props.as} {...rootProps} children={props.children} />;
    }
});
