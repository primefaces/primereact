'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/radiobutton';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { RadioButtonRoot, defaultRootProps } from 'primereact/radiobutton';
import * as React from 'react';

export const UIRadioButtonRoot = withComponent({
    name: 'RadioButton.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={RadioButtonRoot} attrs={rootProps} />;
    }
});
