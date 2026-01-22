'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/progressbar';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { ProgressBarRoot, defaultRootProps } from 'primereact/progressbar';
import * as React from 'react';

export const UIProgressBarRoot = withComponent({
    name: 'UIProgressBarRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ProgressBarRoot} attrs={rootProps} />;
    }
});
