'use client';
import { Component } from '@primereact/core/component';
import { floatStyles } from '@primereact/styles/label';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { FloatLabelProvider } from './FloatLabel.context';
import { defaultFloatProps } from './FloatLabel.props';

export const FloatLabel = withComponent({
    name: 'FloatLabel',
    defaultProps: defaultFloatProps,
    styles: floatStyles,
    render(instance) {
        const { props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
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
