'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/skeleton';
import { withComponent } from '@primereact/ui/base';
import { Skeleton, defaultProps } from 'primereact/skeleton';
import * as React from 'react';

export const UISkeleton = withComponent({
    name: 'UISkeleton',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={Skeleton} attrs={rootProps} />;
    }
});
