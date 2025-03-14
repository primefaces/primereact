'use client';
import { Component, ComponentProvider } from '@primereact/core/component';
import { useComponent } from '@primereact/core/component/useComponent';
import { usePanel } from '@primereact/headless/panel';
import { styles } from '@primereact/styles/panel';
import type { PanelProps } from '@primereact/types/shared/panel';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Panel.props';
import { PanelCollapse } from './collapse';
import { PanelContent } from './content';
import { PanelFooter } from './footer';
import { PanelHeader } from './header';

export const Panel = (inProps: PanelProps) => {
    const panel = usePanel(inProps);
    const instance = useComponent(inProps, defaultProps, styles, panel);
    const {
        id,
        props,
        ptm,
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

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

Panel.displayName = 'PrimeReact.Panel';
Panel.Header = PanelHeader;
Panel.Content = PanelContent;
Panel.Footer = PanelFooter;
Panel.Collapse = PanelCollapse;
