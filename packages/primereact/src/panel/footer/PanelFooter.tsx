'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import type { PanelFooterProps } from '@primereact/types/shared/panel';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultFooterProps } from './PanelFooter.props';

export const PanelFooter = (inProps: PanelFooterProps) => {
    const instance = useComponent('PanelFooter', { inProps, defaultProps: defaultFooterProps });
    const { props, getParent } = instance;
    const panel = getParent('Panel');

    const footerProps = mergeProps(
        {
            className: panel?.cx('footer')
        },
        panel?.ptm('footer')
    );

    return (
        <ComponentProvider pIf={props.pIf}>
            <Component as={props.as || 'div'} {...footerProps}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

PanelFooter.displayName = 'PrimeReact.PanelFooter';
