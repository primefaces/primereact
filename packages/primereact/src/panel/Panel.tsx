'use client';
import { Component } from '@primereact/core/component';
import { usePanel } from '@primereact/headless/panel';
import { styles } from '@primereact/styles/panel';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { PanelProvider } from './Panel.context';
import { defaultProps } from './Panel.props';
import { PanelCollapse } from './collapse';
import { PanelContent } from './content';
import { PanelFooter } from './footer';
import { PanelHeader } from './header';
import { PanelHeaderActions } from './headeractions';
import { PanelTitle } from './title';

export const Panel = withComponent({
    name: 'Panel',
    defaultProps,
    styles,
    setup: (instance) => {
        const panel = usePanel(instance?.inProps);

        return panel;
    },
    render: (instance) => {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <PanelProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </PanelProvider>
        );
    },
    components: {
        Header: PanelHeader,
        Title: PanelTitle,
        HeaderActions: PanelHeaderActions,
        Content: PanelContent,
        Footer: PanelFooter,
        Collapse: PanelCollapse
    }
});
