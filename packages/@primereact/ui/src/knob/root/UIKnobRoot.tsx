'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/knob';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { KnobRoot, defaultRootProps } from 'primereact/knob';
import * as React from 'react';

export const UIKnobRoot = withComponent({
    name: 'UIKnobRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={KnobRoot} attrs={rootProps} />;
    }
});
