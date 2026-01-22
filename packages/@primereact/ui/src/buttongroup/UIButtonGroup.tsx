'use client';
import { Component, withComponent } from '@primereact/core/component';
import { styles } from '@primereact/styles/buttongroup';
import { mergeDefaultProps } from '@primeuix/utils';
import { ButtonGroup, defaultProps } from 'primereact/buttongroup';
import * as React from 'react';

export const UIButtonGroup = withComponent({
    name: 'UIButtonGroup',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ButtonGroup} attrs={rootProps} />;
    }
});
