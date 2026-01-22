'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/slider';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { SliderRoot, defaultRootProps } from 'primereact/slider';
import * as React from 'react';

export const UISliderRoot = withComponent({
    name: 'UISliderRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={SliderRoot} attrs={rootProps} />;
    }
});
