'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { Button } from '@primereact/ui/button';
import { DrawerClose, defaultCloseProps } from 'primereact/drawer';
import * as React from 'react';

export const UIDrawerClose = withComponent({
    name: 'UIDrawerClose',
    defaultProps: defaultCloseProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={DrawerClose} attrs={rootProps} />;
    }
});
