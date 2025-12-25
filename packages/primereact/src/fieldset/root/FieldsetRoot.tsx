'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useFieldset } from '@primereact/headless/fieldset';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { FieldsetProvider } from '../Fieldset.context';
import { defaultRootProps } from './FieldsetRoot.props';

export const FieldsetRoot = withComponent({
    name: 'FieldsetRoot',
    defaultProps: defaultRootProps,
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
    }
});
