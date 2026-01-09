'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/label';
import { withComponent } from '@primereact/ui/base';
import { LabelRoot, defaultRootProps } from 'primereact/label';
import * as React from 'react';

export const UILabelRoot = withComponent({
    name: 'UILabelRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={LabelRoot} attrs={rootProps} />;
    }
});
