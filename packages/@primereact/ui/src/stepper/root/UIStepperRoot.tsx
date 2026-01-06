'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/stepper';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { StepperRoot, defaultRootProps } from 'primereact/stepper';
import * as React from 'react';

export const UIStepperRoot = withComponent({
    name: 'StepperRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={StepperRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
