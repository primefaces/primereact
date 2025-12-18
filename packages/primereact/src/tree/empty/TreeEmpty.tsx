'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTreeContext } from '../Tree.context';
import { defaultEmptyProps } from './TreeEmpty.props';

export const TreeEmpty = withComponent({
    name: 'TreeEmpty',
    defaultProps: defaultEmptyProps,
    setup() {
        const tree = useTreeContext();

        return { tree };
    },
    render(instance) {
        const { props, ptmi, tree } = instance;

        const rootProps = mergeProps(
            {
                className: tree?.cx('empty')
            },
            tree?.ptm('empty'),
            ptmi('root')
        );

        return <Component pIf={tree?.getNodes().length === 0} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
