'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useFieldsetContext } from '../Fieldset.context';
import { defaultTriggerProps } from './FieldsetTrigger.props';

export const FieldsetTrigger = withComponent({
    name: 'Fieldset.Trigger',
    defaultProps: defaultTriggerProps,
    setup() {
        const fieldset = useFieldsetContext();

        return { fieldset };
    },
    render(instance) {
        const { props, ptmi, fieldset } = instance;
        const { as, children, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: fieldset?.cx('trigger'),
                onClick: fieldset?.onTriggerClick
            },
            fieldset?.ptm('trigger'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={children} />;
    }
});
