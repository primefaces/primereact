'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/compare';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { CompareRoot, defaultRootProps } from 'primereact/compare';
import * as React from 'react';

export const UICompareRoot = withComponent({
    name: 'Compare.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={CompareRoot} attrs={rootProps} />;
    }
});
