'use client';
import { Component, withComponent } from '@primereact/core/component';
import { floatStyles } from '@primereact/styles/label';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useLabelContext } from '../Label.context';
import { defaultFloatProps } from './FloatLabel.props';

export const FloatLabel = withComponent({
    name: 'FloatLabel',
    defaultProps: defaultFloatProps,
    styles: floatStyles,
    setup() {
        const label = useLabelContext();

        return { label };
    },
    render(instance) {
        const { props, ptmi, cx, label } = instance;

        const rootProps = mergeProps(
            {
                className: cx('root')
            },
            label?.ptm('float'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
