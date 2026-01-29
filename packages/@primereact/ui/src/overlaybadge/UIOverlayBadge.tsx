'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/overlaybadge';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { OverlayBadge, defaultProps } from 'primereact/overlaybadge';
import * as React from 'react';

export const UIOverlayBadge = withComponent({
    name: 'OverlayBadge',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={OverlayBadge} attrs={rootProps} />;
    }
});
