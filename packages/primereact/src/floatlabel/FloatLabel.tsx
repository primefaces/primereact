'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useFloatLabel } from '@primereact/headless/floatlabel';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { FloatLabelProvider } from './FloatLabel.context';
import { defaultProps } from './FloatLabel.props';

export const FloatLabel = withComponent({
    name: 'FloatLabel',
    defaultProps,
    setup(instance) {
        const floatlabel = useFloatLabel(instance?.inProps);

        return floatlabel;
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
            <FloatLabelProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </FloatLabelProvider>
        );
    }
});
