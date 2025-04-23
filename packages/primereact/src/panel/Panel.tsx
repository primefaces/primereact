'use client';
import { Component, withComponent } from '@primereact/core/component';
import { usePanel } from '@primereact/headless/panel';
import { styles } from '@primereact/styles/panel';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
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
        const {
            id,
            props,
            ptmi,
            cx,
            // element refs
            elementRef
        } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return <Component as={props.as} {...rootProps} ref={elementRef} children={props.children} />;
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
