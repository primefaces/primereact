'use client';
import { Component } from '@primereact/core/component';
import { iftaStyles } from '@primereact/styles/label';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { IftaLabelProvider } from './IftaLabel.context';
import { defaultIftaProps } from './IftaLabel.props';

export const IftaLabel = withComponent({
    name: 'IftaLabel',
    defaultProps: defaultIftaProps,
    styles: iftaStyles,
    render(instance) {
        const { props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <IftaLabelProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </IftaLabelProvider>
        );
    }
});
