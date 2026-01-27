'use client';
import { Component, withComponent } from '@primereact/core/component';
import { isElementOfType } from '@primereact/core/utils';
import { useFieldset } from '@primereact/headless/fieldset';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { FieldsetProvider } from '../Fieldset.context';
import { defaultRootProps } from './FieldsetRoot.props';

export const FieldsetRoot = withComponent({
    name: 'Fieldset.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const fieldset = useFieldset(instance.inProps);

        return fieldset;
    },
    render(instance) {
        const { id, props, ptmi, cx, state } = instance;
        const { as, ...restProps } = props;

        const asProps = isElementOfType(as, 'Collapsible.Root')
            ? {
                  as: 'fieldset',
                  defaultOpen: state.open,
                  pt: instance?.ptm('pcCollapsible')
              }
            : undefined;

        const rootProps = mergeProps(
            restProps,
            asProps,
            {
                id,
                className: cx('root'),
                ...(props.disabled ? { 'data-disabled': '' } : undefined),
                [state.open ? 'data-open' : 'data-closed']: ''
            },
            ptmi('root')
        );

        return (
            <FieldsetProvider value={instance}>
                <Component as={as} instance={instance} attrs={rootProps} children={props.children} />
            </FieldsetProvider>
        );
    }
});
