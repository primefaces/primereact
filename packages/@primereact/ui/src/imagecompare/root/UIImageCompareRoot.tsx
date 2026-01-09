'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/imagecompare';
import { withComponent } from '@primereact/ui/base';
import { ImageCompareRoot, defaultRootProps } from 'primereact/imagecompare';
import * as React from 'react';

export const UIImageCompareRoot = withComponent({
    name: 'UIImageCompareRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ImageCompareRoot} attrs={rootProps} />;
    }
});
