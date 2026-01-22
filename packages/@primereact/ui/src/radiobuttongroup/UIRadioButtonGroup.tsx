'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/radiobuttongroup';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { RadioButtonGroup, defaultProps } from 'primereact/radiobuttongroup';
import * as React from 'react';

export const UIRadioButtonGroup = withComponent({
    name: 'RadioButtonGroup',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={RadioButtonGroup} attrs={rootProps} />;
    }
});
