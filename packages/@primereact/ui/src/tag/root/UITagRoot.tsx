'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/tag';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { TagRoot, defaultRootProps } from 'primereact/tag';
import * as React from 'react';

export const UITagRoot = withComponent({
    name: 'TagRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={TagRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
