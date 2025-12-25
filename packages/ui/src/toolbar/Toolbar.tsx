'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useToolbar } from '@primereact/headless/toolbar';
import { styles } from '@primereact/styles/toolbar';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ToolbarProvider } from './Toolbar.context';
import { defaultProps } from './Toolbar.props';
import { ToolbarCenter } from './center';
import { ToolbarEnd } from './end';
import { ToolbarStart } from './start';

export const Toolbar = withComponent({
    name: 'Toolbar',
    defaultProps,
    styles,
    setup(instance) {
        const toolbar = useToolbar(instance.inProps);

        return toolbar;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                role: 'toolbar'
            },
            ptmi('root')
        );

        return (
            <ToolbarProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ToolbarProvider>
        );
    },
    components: {
        Start: ToolbarStart,
        Center: ToolbarCenter,
        End: ToolbarEnd
    }
});
