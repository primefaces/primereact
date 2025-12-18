'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTreeContext } from '../Tree.context';
import { defaultFooterProps } from './TreeFooter.props';

export const TreeFooter = withComponent({
    name: 'TreeFooter',
    defaultProps: defaultFooterProps,
    setup() {
        const tree = useTreeContext();

        return { tree };
    },
    render(instance) {
        const { props, ptmi, tree } = instance;

        const rootProps = mergeProps(
            {
                className: tree?.cx('footer')
            },
            tree?.ptm('footer'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
