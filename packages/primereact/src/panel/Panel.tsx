'use client';
import { Component, ComponentProvider, withComponentStyle } from '@primereact/core/component';
import { usePanel } from '@primereact/headless/panel';
import { styles } from '@primereact/styles/panel';
import * as React from 'react';
import { defaultProps } from './Panel.props';

export const Panel = withComponentStyle(
    ({ props }) => {
        const panel = usePanel(props);
        const {
            // element refs
            elementRef
        } = panel;

        console.log(panel);

        return (
            <ComponentProvider pIf={props.pIf} instance={panel}>
                <Component as={props.as || 'div'} ref={elementRef}>
                    TESTTT
                </Component>
            </ComponentProvider>
        );
    },
    defaultProps,
    styles
);
