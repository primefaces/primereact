'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/knob';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { KnobRoot, defaultRootProps } from 'primereact/knob';
import * as React from 'react';

export const UIKnobRoot = withComponent({
    name: 'KnobRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={KnobRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
