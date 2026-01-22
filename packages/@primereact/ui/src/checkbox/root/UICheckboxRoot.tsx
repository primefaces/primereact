'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/checkbox';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { CheckboxRoot, defaultRootProps } from 'primereact/checkbox';
import * as React from 'react';

export const UICheckboxRoot = withComponent({
    name: 'Checkbox.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={CheckboxRoot} attrs={rootProps} />;
    }
});
