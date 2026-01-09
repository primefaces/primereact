'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/autocomplete';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { AutoCompleteRoot, defaultRootProps } from 'primereact/autocomplete';
import * as React from 'react';

export const UIAutoCompleteRoot = withComponent({
    name: 'UIAutoCompleteRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={AutoCompleteRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
