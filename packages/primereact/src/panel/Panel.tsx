'use client';
import { Component, ComponentProvider, withComponent } from '@primereact/core/component';
import { getCurrentInstance } from '@primereact/core/utils';
import { usePanel } from '@primereact/headless/panel';
import { styles } from '@primereact/styles/panel';
import * as React from 'react';
import { defaultProps } from './Panel.props';

export const Panel = withComponent(
    (inInstance, ref) => {
        const panel = usePanel(inInstance.inProps, ref);
        const instance = getCurrentInstance(inInstance, panel);
        const {
            id,
            props,
            state,
            // element refs
            elementRef,
            contentRef,
            // methods
            onButtonClick,
            // computed
            buttonAriaLabel
        } = instance;

        return (
            <ComponentProvider pIf={props.pIf} instance={instance}>
                <Component as={props.as || 'div'} ref={elementRef}>
                    {props.children}
                </Component>
            </ComponentProvider>
        );
    },
    defaultProps,
    styles
);
