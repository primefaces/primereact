'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/checkboxgroup';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { CheckboxGroup, defaultProps } from 'primereact/checkboxgroup';
import * as React from 'react';

export const UICheckboxGroup = withComponent({
    name: 'CheckboxGroup',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={CheckboxGroup} attrs={rootProps} />;
    }
});
