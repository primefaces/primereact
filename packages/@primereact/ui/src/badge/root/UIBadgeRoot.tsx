'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/badge';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { BadgeRoot, defaultRootProps } from 'primereact/badge';
import * as React from 'react';

export const UIBadgeRoot = withComponent({
    name: 'BadgeRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={BadgeRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
