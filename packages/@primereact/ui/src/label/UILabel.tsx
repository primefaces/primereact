'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/label';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { Label, defaultProps } from 'primereact/label';
import * as React from 'react';

export const UILabel = withComponent({
    name: 'Label',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={Label} attrs={rootProps} />;
    }
});
