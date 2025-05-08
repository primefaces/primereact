'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePanelContext } from '../Panel.context';
import { defaultHeaderActionsProps } from './PanelHeaderActions.props';

export const PanelHeaderActions = withComponent({
    name: 'PanelHeaderActions',
    defaultProps: defaultHeaderActionsProps,
    setup() {
        const panel = usePanelContext();

        return { panel };
    },
    render: (instance) => {
        const { props, ptmi, panel } = instance;

        const rootProps = mergeProps(
            {
                className: panel?.cx('headerActions')
            },
            panel?.ptm('headerActions'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
