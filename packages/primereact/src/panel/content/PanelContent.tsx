'use client';
import { Component, withComponent } from '@primereact/core/component';
import { isElementOfType } from '@primereact/core/utils';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePanelContext } from '../Panel.context';
import { defaultContentProps } from './PanelContent.props';

export const PanelContent = withComponent({
    name: 'Panel.Content',
    defaultProps: defaultContentProps,
    setup() {
        const panel = usePanelContext();

        return { panel };
    },
    render(instance) {
        const { props, ptmi, ptm, panel } = instance;
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
                className: panel?.cx('content'),
                style: panel?.sx('content'),
                role: 'region',
                [panel?.state.collapsed ? 'data-closed' : 'data-open']: ''
            },
            panel?.ptm('content'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
