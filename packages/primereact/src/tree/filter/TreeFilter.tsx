'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTreeContext } from '../Tree.context';
import { defaultFilterProps } from './TreeFilter.props';

export const TreeFilter = withComponent({
    name: 'TreeFilter',
    defaultProps: defaultFilterProps,
    setup() {
        const tree = useTreeContext();

        return { tree };
    },
    render(instance) {
        const { props, ptmi, tree } = instance;

        const rootProps = mergeProps(
            {
                className: tree?.cx('pcFilter'),
                autoComplete: 'off',
                onKeyUp: tree?.onFilterKeyUp
            },
            tree?.ptm('pcFilter'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
