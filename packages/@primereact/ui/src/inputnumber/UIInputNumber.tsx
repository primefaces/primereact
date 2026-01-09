'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/inputnumber';
import { withComponent } from '@primereact/ui/base';
import { InputNumber, defaultProps } from 'primereact/inputnumber';
import * as React from 'react';

export const UIInputNumber = withComponent({
    name: 'UIInputNumber',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={InputNumber} attrs={rootProps} />;
    }
});
