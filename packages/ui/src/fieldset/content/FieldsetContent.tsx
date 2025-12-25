'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useFieldsetContext } from '../Fieldset.context';
import { defaultContentProps } from './FieldsetContent.props';

export const FieldsetContent = withComponent({
    name: 'FieldsetContent',
    defaultProps: defaultContentProps,
    setup() {
        const fieldset = useFieldsetContext();

        return { fieldset };
    },
    render(instance) {
        const { props, ptmi, fieldset } = instance;

        const rootProps = mergeProps(
            {
                className: fieldset?.cx('content')
            },
            fieldset?.ptm('content'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
