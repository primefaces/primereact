'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/slider';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { SliderRoot, defaultRootProps } from 'primereact/slider';
import * as React from 'react';

export const UISliderRoot = withComponent({
    name: 'SliderRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={SliderRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
