'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { withComponent } from '@primereact/ui/base';
import { Overlay, defaultProps } from 'primereact/overlay';
import * as React from 'react';

export const UIOverlay = withComponent({
    name: 'UIOverlay',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({}, instance.inProps);

        return <Component as={Overlay} attrs={rootProps} />;
    }
});
