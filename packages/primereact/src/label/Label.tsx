'use client';
import { Component } from '@primereact/core/component';
import { useLabel } from '@primereact/headless/label';
import { styles } from '@primereact/styles/label';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { LabelProvider } from './Label.context';
import { defaultProps } from './Label.props';
import { FloatLabel } from './float';
import { IftaLabel } from './ifta';

export const Label = withComponent({
    name: 'Label',
    defaultProps,
    styles,
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
    },
    components: {
        Float: FloatLabel,
        Ifta: IftaLabel
    }
});
