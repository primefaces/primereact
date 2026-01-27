'use client';
import { Component, withComponent } from '@primereact/core/component';
import { isElementOfType } from '@primereact/core/utils';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useFieldsetContext } from '../Fieldset.context';
import { defaultContentProps } from './FieldsetContent.props';

export const FieldsetContent = withComponent({
    name: 'Fieldset.Content',
    defaultProps: defaultContentProps,
    setup() {
        const fieldset = useFieldsetContext();

        return { fieldset };
    },
    render(instance) {
        const { props, ptmi, ptm, fieldset } = instance;
        const { as, ...restProps } = props;

        const asProps = isElementOfType(as, 'Collapsible.Content')
            ? {
                  pt: ptm('pcCollapsible.content')
              }
            : undefined;

        const rootProps = mergeProps(
            restProps,
            asProps,
            {
                id: fieldset?.id + '_content',
                className: fieldset?.cx('content'),
                role: 'region',
                [fieldset?.state.collapsed ? 'data-closed' : 'data-open']: ''
            },
            fieldset?.ptm('content'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
