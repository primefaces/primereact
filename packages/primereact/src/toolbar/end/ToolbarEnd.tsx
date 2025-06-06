'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useToolbarContext } from '../Toolbar.context';
import { ToolbarEndProvider } from './ToolbarEnd.context';
import { defaultEndProps } from './ToolbarEnd.props';

export const ToolbarEnd = withComponent({
    name: 'ToolbarEnd',
    defaultProps: defaultEndProps,
    setup() {
        const toolbar = useToolbarContext();

        return { toolbar };
    },
    render(instance) {
        const { props, ptmi, toolbar } = instance;

        const rootProps = mergeProps(
            {
                className: toolbar?.cx('end')
            },
            toolbar?.ptm('end'),
            ptmi('root')
        );

        return (
            <ToolbarEndProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ToolbarEndProvider>
        );
    }
});
