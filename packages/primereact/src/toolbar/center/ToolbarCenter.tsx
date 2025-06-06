'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useToolbarContext } from '../Toolbar.context';
import { ToolbarCenterProvider } from './ToolbarCenter.context';
import { defaultCenterProps } from './ToolbarCenter.props';

export const ToolbarCenter = withComponent({
    name: 'ToolbarCenter',
    defaultProps: defaultCenterProps,
    setup() {
        const toolbar = useToolbarContext();

        return { toolbar };
    },
    render(instance) {
        const { props, ptmi, toolbar } = instance;

        const rootProps = mergeProps(
            {
                className: toolbar?.cx('center')
            },
            toolbar?.ptm('center'),
            ptmi('root')
        );

        return (
            <ToolbarCenterProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ToolbarCenterProvider>
        );
    }
});
