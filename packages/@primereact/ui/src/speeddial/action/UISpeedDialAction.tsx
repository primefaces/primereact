'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Button } from '@primereact/ui/button';
import { mergeDefaultProps } from '@primeuix/utils';
import { defaultActionProps, SpeedDialAction } from 'primereact/speeddial';
import * as React from 'react';

export const UISpeedDialAction = withComponent({
    name: 'UISpeedDialAction',
    defaultProps: defaultActionProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={SpeedDialAction} attrs={rootProps} />;
    }
});
