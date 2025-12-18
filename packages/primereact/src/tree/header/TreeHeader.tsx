'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTreeContext } from '../Tree.context';
import { defaultHeaderProps } from './TreeHeader.props';

export const TreeHeader = withComponent({
    name: 'TreeHeader',
    defaultProps: defaultHeaderProps,
    setup() {
        const tree = useTreeContext();

        return { tree };
    },
    render(instance) {
        const { props, ptmi, tree } = instance;

        const rootProps = mergeProps(
            {
                className: tree?.cx('header')
            },
            tree?.ptm('header'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
