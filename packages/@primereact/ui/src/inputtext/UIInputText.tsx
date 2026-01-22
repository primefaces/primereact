'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/inputtext';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { InputText, defaultProps } from 'primereact/inputtext';
import * as React from 'react';

export const UIInputText = withComponent({
    name: 'InputText',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={InputText} attrs={rootProps} />;
    }
});
