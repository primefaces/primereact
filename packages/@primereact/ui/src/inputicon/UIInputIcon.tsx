'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/inputicon';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { InputIcon, defaultProps } from 'primereact/inputicon';
import * as React from 'react';

export const UIInputIcon = withComponent({
    name: 'InputIcon',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={InputIcon} attrs={rootProps} />;
    }
});
