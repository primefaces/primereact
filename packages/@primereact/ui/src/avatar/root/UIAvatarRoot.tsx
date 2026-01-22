'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/avatar';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { AvatarRoot, defaultRootProps } from 'primereact/avatar';
import * as React from 'react';

export const UIAvatarRoot = withComponent({
    name: 'UIAvatarRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={AvatarRoot} attrs={rootProps} />;
    }
});
