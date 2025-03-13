'use client';
import { Component, ComponentProvider, withComponent } from '@primereact/core/component';
import { getCurrentInstance } from '@primereact/core/utils';
import { usePanel } from '@primereact/headless/panel';
import { styles } from '@primereact/styles/panel';
import { PanelProps } from '@primereact/types/shared/panel';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Panel.props';
import { PanelContent } from './content';
import { PanelFooter } from './footer';
import { PanelHeader } from './header';

declare type Panel = React.FC<PanelProps> & {
    Header: typeof PanelHeader;
    Content: typeof PanelContent;
    Footer: typeof PanelFooter;
};

export const Panel: Panel = withComponent(
    (inInstance, ref) => {
        const panel = usePanel(inInstance.inProps, ref);
        const instance = getCurrentInstance(inInstance, panel);
        const {
            id,
            props,
            state,
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
    },
    defaultProps,
    styles
);

Panel.displayName = 'PrimeReact.Panel';
Panel.Header = PanelHeader;
Panel.Content = PanelContent;
Panel.Footer = PanelFooter;
