'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultFooterProps } from './PanelFooter.props';

export const PanelFooter = withComponent({
    name: 'PanelFooter',
    defaultProps: defaultFooterProps,
    render: (instance) => {
        const { props, ptmi, getParent } = instance;
        const panel = getParent('Panel');

        const rootProps = mergeProps(
            {
                className: panel?.cx('footer')
            },
            panel?.ptm('footer'),
            ptmi('root')
        );

        return <Component as={props.as} {...rootProps} children={props.children} />;
    }
});
