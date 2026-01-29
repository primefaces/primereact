'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/floatlabel';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { FloatLabel, defaultProps } from 'primereact/floatlabel';
import * as React from 'react';

export const UIFloatLabel = withComponent({
    name: 'FloatLabel',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={FloatLabel} attrs={rootProps} />;
    }
});
