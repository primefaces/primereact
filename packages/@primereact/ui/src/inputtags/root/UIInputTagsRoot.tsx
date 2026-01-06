'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/inputtags';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { InputTagsRoot, defaultRootProps } from 'primereact/inputtags';
import * as React from 'react';

export const UIInputTagsRoot = withComponent({
    name: 'InputTagsRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={InputTagsRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
