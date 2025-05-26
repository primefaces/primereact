'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { usePanelContext } from '../Panel.context';
import { defaultFooterProps } from './PanelFooter.props';

export const PanelFooter = withComponent({
    name: 'PanelFooter',
    defaultProps: defaultFooterProps,
    setup() {
        const panel = usePanelContext();

        return { panel };
    },
    render: (instance) => {
        const { props, ptmi, panel } = instance;

        const rootProps = mergeProps(
            {
                className: panel?.cx('footer')
            },
            panel?.ptm('footer'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
