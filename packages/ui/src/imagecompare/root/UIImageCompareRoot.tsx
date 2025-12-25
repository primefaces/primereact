'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/imagecompare';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { ImageCompareRoot, defaultRootProps } from 'primereact/imagecompare';
import * as React from 'react';

export const UIImageCompareRoot = withComponent({
    name: 'ImageCompareRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={ImageCompareRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
