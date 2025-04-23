'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultContentProps } from './PanelContent.props';

export const PanelContent = withComponent({
    name: 'PanelContent',
    defaultProps: defaultContentProps,
    render: (instance) => {
        const { props, ptmi, getParent } = instance;
        const panel = getParent('Panel');

        const rootProps = mergeProps(
            {
                className: panel?.cx('content')
            },
            panel?.ptm('content'),
            ptmi('root')
        );

        return <Component as={props.as} {...rootProps} children={props.children} />;
    }
});
