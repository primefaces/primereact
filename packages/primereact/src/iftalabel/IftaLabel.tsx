'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useIftaLabel } from '@primereact/headless/iftalabel';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { IftaLabelProvider } from './IftaLabel.context';
import { defaultProps } from './IftaLabel.props';

export const IftaLabel = withComponent({
    name: 'IftaLabel',
    defaultProps,
    setup(instance) {
        const iftalabel = useIftaLabel(instance?.inProps);

        return iftalabel;
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
            <IftaLabelProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </IftaLabelProvider>
        );
    }
});
