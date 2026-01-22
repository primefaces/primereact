'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/orgchart';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { OrgChartRoot, defaultRootProps } from 'primereact/orgchart';
import * as React from 'react';

export const UIOrgChartRoot = withComponent({
    name: 'OrgChart.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={OrgChartRoot} attrs={rootProps} />;
    }
});
