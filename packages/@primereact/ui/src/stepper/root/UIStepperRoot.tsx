'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/stepper';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { StepperRoot, defaultRootProps } from 'primereact/stepper';
import * as React from 'react';

export const UIStepperRoot = withComponent({
    name: 'Stepper.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={StepperRoot} attrs={rootProps} />;
    }
});
