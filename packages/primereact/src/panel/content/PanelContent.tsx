'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePanelContext } from '../Panel.context';
import { defaultContentProps } from './PanelContent.props';

export const PanelContent = withComponent({
    name: 'PanelContent',
    defaultProps: defaultContentProps,
    setup() {
        const panel = usePanelContext();

        return { panel };
    },
    render: (instance) => {
        const { props, ptmi, panel } = instance;

        const rootProps = mergeProps(
            {
                className: panel?.cx('content')
            },
            panel?.ptm('content'),
            ptmi('root')
        );

        return <Component as={props.as} asChild={props.asChild} {...rootProps} children={props.children} />;
    }
});
