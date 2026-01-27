'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useFieldsetContext } from '../Fieldset.context';
import { defaultTitleProps } from './FieldsetTitle.props';

export const FieldsetTitle = withComponent({
    name: 'Fieldset.Title',
    defaultProps: defaultTitleProps,
    setup() {
        const fieldset = useFieldsetContext();

        return { fieldset };
    },
    render(instance) {
        const { props, ptmi, fieldset } = instance;

        const rootProps = mergeProps(
            {
                className: fieldset?.cx('title')
            },
            fieldset?.ptm('title'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
