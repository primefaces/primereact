'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/badge';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { BadgeRoot, defaultRootProps } from 'primereact/badge';
import * as React from 'react';

export const UIBadgeRoot = withComponent({
    name: 'UIBadgeRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={BadgeRoot} attrs={rootProps} />;
    }
});
