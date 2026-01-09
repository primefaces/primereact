'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/iconfield';
import { withComponent } from '@primereact/ui/base';
import { IconFieldRoot, defaultRootProps } from 'primereact/iconfield';
import * as React from 'react';

export const UIIconFieldRoot = withComponent({
    name: 'UIIconFieldRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={IconFieldRoot} attrs={rootProps} />;
    }
});
