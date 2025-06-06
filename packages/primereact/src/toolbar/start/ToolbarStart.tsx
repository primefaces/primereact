'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useToolbarContext } from '../Toolbar.context';
import { ToolbarStartProvider } from './ToolbarStart.context';
import { defaultStartProps } from './ToolbarStart.props';

export const ToolbarStart = withComponent({
    name: 'ToolbarStart',
    defaultProps: defaultStartProps,
    setup() {
        const toolbar = useToolbarContext();

        return { toolbar };
    },
    render(instance) {
        const { props, ptmi, toolbar } = instance;

        const rootProps = mergeProps(
            {
                className: toolbar?.cx('start')
            },
            toolbar?.ptm('start'),
            ptmi('root')
        );

        return (
            <ToolbarStartProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ToolbarStartProvider>
        );
    }
});
