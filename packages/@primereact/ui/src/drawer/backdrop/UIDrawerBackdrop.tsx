'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primeuix/utils';
import { Backdrop } from 'primereact/backdrop';
import { DrawerBackdrop, defaultBackdropProps } from 'primereact/drawer';
import * as React from 'react';

export const UIDrawerBackdrop = withComponent({
    name: 'Drawer.Backdrop',
    defaultProps: defaultBackdropProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Backdrop }, instance.inProps);

        return <Component as={DrawerBackdrop} attrs={rootProps} />;
    }
});
