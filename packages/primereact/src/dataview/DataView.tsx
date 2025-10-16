'use client';
import { Component } from '@primereact/core/component';
import { useDataView } from '@primereact/headless/dataview';
import { styles } from '@primereact/styles/dataview';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { DataViewProvider } from './DataView.context';
import { defaultProps } from './DataView.props';

export const DataView = withComponent({
    name: 'DataView',
    defaultProps,
    styles,
    setup(instance) {
        const dataview = useDataView(instance.inProps);

        return dataview;
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
            <DataViewProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </DataViewProvider>
        );
    }
});
