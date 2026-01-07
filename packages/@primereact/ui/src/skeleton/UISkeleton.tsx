'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/skeleton';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { Skeleton, defaultProps } from 'primereact/skeleton';
import * as React from 'react';

export const UISkeleton = withComponent({
    name: 'UISkeleton',
    defaultProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={Skeleton} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
