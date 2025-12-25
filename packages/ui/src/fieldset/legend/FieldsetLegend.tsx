'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useFieldsetContext } from '../Fieldset.context';
import { defaultLegendProps } from './FieldsetLegend.props';

export const FieldsetLegend = withComponent({
    name: 'FieldsetLegend',
    defaultProps: defaultLegendProps,
    setup() {
        const fieldset = useFieldsetContext();

        return { fieldset };
    },
    render(instance) {
        const { props, ptmi, fieldset } = instance;

        const rootProps = mergeProps(
            {
                className: fieldset?.cx('legend')
            },
            fieldset?.ptm('legend'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
