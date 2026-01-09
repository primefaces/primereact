'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { Button } from '@primereact/ui/button';
import { DialogMaximizable, defaultMaximizableProps } from 'primereact/dialog';
import * as React from 'react';

export const UIDialogMaximizable = withComponent({
    name: 'UIDialogMaximizable',
    defaultProps: defaultMaximizableProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={DialogMaximizable} attrs={rootProps} />;
    }
});
