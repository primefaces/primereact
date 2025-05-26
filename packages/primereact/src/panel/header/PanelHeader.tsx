'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { usePanelContext } from '../Panel.context';
import { defaultHeaderProps } from './PanelHeader.props';

export const PanelHeader = withComponent({
    name: 'PanelHeader',
    defaultProps: defaultHeaderProps,
    setup() {
        const panel = usePanelContext();

        return { panel };
    },
    render(instance) {
        const { props, ptmi, panel } = instance;

        const rootProps = mergeProps(
            {
                className: panel?.cx('header')
            },
            panel?.ptm('header'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
