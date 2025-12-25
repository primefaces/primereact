'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/listbox';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { ListboxRoot, defaultRootProps } from 'primereact/listbox';
import * as React from 'react';

export const UIListboxRoot = withComponent({
    name: 'ListboxRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={ListboxRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
