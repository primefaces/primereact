'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/badge';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { Badge, defaultProps } from 'primereact/badge';
import * as React from 'react';

export const UIBadge = withComponent({
    name: 'Badge',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={Badge} attrs={rootProps} />;
    }
});
