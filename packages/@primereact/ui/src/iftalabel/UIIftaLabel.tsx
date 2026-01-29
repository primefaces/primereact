'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/iftalabel';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { IftaLabel, defaultProps } from 'primereact/iftalabel';
import * as React from 'react';

export const UIIftaLabel = withComponent({
    name: 'IftaLabel',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={IftaLabel} attrs={rootProps} />;
    }
});
