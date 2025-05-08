'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePanelContext } from '../Panel.context';
import { defaultCollapseProps } from './PanelCollapse.props';

export const PanelCollapse = withComponent({
    name: 'PanelCollapse',
    defaultProps: defaultCollapseProps,
    setup() {
        const panel = usePanelContext();

        return { panel };
    },
    render: (instance) => {
        const { props, ptmi, panel } = instance;

        const rootProps = mergeProps(
            {
                type: 'button',
                className: panel?.cx('pcToggleButton'),
                onClick: panel?.onButtonClick
            },
            panel?.ptm('pcToggleButton'),
            ptmi('root')
        );

        return <Component as={props.as} asChild={props.asChild} {...rootProps} children={props.children} />;
    }
});
