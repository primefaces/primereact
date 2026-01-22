'use client';
import { Component } from '@primereact/core/component';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { Overlay, defaultProps } from 'primereact/overlay';
import * as React from 'react';

export const UIOverlay = withComponent({
    name: 'Overlay',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({}, instance.inProps);

        return <Component as={Overlay} attrs={rootProps} />;
    }
});
