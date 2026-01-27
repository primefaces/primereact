'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useCollapsible } from '@primereact/headless/collapsible';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { CollapsibleProvider } from '../Collapsible.context';
import { defaultRootProps } from './CollapsibleRoot.props';

export const CollapsibleRoot = withComponent({
    name: 'Collapsible.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const collapsible = useCollapsible(instance.inProps);

        return collapsible;
    },
    render(instance) {
        const { id, props, ptmi, cx, state } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                ...(props.disabled ? { 'data-disabled': '' } : undefined),
                [state.open ? 'data-open' : 'data-closed']: ''
            },
            ptmi('root')
        );

        return (
            <CollapsibleProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </CollapsibleProvider>
        );
    }
});
