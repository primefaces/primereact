'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useLabel } from '@primereact/headless/label';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { LabelProvider } from '../Label.context';
import { defaultRootProps } from './LabelRoot.props';

export const LabelRoot = withComponent({
    name: 'LabelRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const label = useLabel(instance.inProps);

        return label;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <LabelProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </LabelProvider>
        );
    }
});
