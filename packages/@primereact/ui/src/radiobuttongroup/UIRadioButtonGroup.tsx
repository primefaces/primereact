'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/radiobuttongroup';
import { withComponent } from '@primereact/ui/base';
import { RadioButtonGroup, defaultProps } from 'primereact/radiobuttongroup';
import * as React from 'react';

export const UIRadioButtonGroup = withComponent({
    name: 'UIRadioButtonGroup',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={RadioButtonGroup} attrs={rootProps} />;
    }
});
