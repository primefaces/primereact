'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/orgchart';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { OrgChartRoot, defaultRootProps } from 'primereact/orgchart';
import * as React from 'react';

export const UIOrgChartRoot = withComponent({
    name: 'OrgChartRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={OrgChartRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
