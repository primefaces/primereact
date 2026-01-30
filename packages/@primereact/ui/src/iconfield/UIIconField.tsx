'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/iconfield';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { IconField, defaultProps } from 'primereact/iconfield';
import * as React from 'react';

export const UIIconField = withComponent({
    name: 'IconField',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={IconField} attrs={rootProps} />;
    }
});
