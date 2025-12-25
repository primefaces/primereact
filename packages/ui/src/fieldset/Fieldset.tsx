'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useFieldset } from '@primereact/headless/fieldset';
import { styles } from '@primereact/styles/fieldset';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { FieldsetContent } from './content';
import { FieldsetProvider } from './Fieldset.context';
import { defaultProps } from './Fieldset.props';
import { FieldsetLegend } from './legend';

export const Fieldset = withComponent({
    name: 'Fieldset',
    defaultProps,
    styles,
    setup(instance) {
        const fieldset = useFieldset(instance.inProps);

        return fieldset;
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
            <FieldsetProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </FieldsetProvider>
        );
    },
    components: {
        Legend: FieldsetLegend,
        Content: FieldsetContent
    }
});
