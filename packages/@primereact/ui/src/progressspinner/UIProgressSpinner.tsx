'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/progressspinner';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { ProgressSpinner, defaultProps } from 'primereact/progressspinner';
import * as React from 'react';

export const UIProgressSpinner = withComponent({
    name: 'ProgressSpinner',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ProgressSpinner} attrs={rootProps} />;
    }
});
