'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/iconfield';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { IconFieldRoot, defaultRootProps } from 'primereact/iconfield';
import * as React from 'react';

export const UIIconFieldRoot = withComponent({
    name: 'IconField.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={IconFieldRoot} attrs={rootProps} />;
    }
});
