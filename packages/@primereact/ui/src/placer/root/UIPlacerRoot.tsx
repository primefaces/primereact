'use client';
import { Component } from '@primereact/core/component';
import { withComponent } from '@primereact/ui/base';
import { PlacerRoot, defaultRootProps } from 'primereact/placer';
import * as React from 'react';

export const UIPlacerRoot = withComponent({
    name: 'Placer.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        return <Component as={PlacerRoot} attrs={instance.inProps} />;
    }
});
