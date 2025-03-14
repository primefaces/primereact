'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultCollapseProps } from './PanelCollapse.props';

export const PanelCollapse = withComponent({
    render: ({ props, getParent }) => {
        const panel = getParent('Panel');
        console.log(panel);
        const collapseProps = mergeProps(
            {
                type: 'button',
                className: panel?.cx?.('pcToggleButton'),
                onClick: panel?.onButtonClick
            },
            panel?.ptm?.('pcToggleButton')
        );

        return (
            <Component as={props.as || 'button'} {...collapseProps}>
                {props.children}
            </Component>
        );
    },
    defaultProps: defaultCollapseProps
});

/*export const PanelCollapse = (inProps) => {
    const instance = useComponent(inProps, defaultCollapseProps);
    const { props, getParent } = instance;
    const panel = getParent('Panel');

    const collapseProps = mergeProps(
        {
            type: 'button',
            className: panel?.cx?.('pcToggleButton'),
            onClick: panel?.onButtonClick
        },
        panel?.ptm?.('pcToggleButton')
    );

    return (
        <ComponentProvider pIf={props.pIf}>
            <Component as={props.as || 'button'} {...collapseProps}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};*/

PanelCollapse.displayName = 'PrimeReact.PanelCollapse';
