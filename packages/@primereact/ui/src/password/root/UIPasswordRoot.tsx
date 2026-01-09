'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/password';
import { withComponent } from '@primereact/ui/base';
import { PasswordRoot, defaultRootProps } from 'primereact/password';
import * as React from 'react';

export const UIPasswordRoot = withComponent({
    name: 'UIPasswordRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={PasswordRoot} attrs={rootProps} />;
    }
});
