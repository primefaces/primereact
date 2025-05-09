'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePanelContext } from '../Panel.context';
import { defaultTitleProps } from './PanelTitle.props';

export const PanelTitle = withComponent({
    name: 'PanelTitle',
    defaultProps: defaultTitleProps,
    setup() {
        const panel = usePanelContext();

        return { panel };
    },
    render(instance) {
        const { props, ptmi, panel } = instance;

        const rootProps = mergeProps(
            {
                className: panel?.cx('title')
            },
            panel?.ptm('title'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
