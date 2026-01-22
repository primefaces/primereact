'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Button } from '@primereact/ui/button';
import { mergeDefaultProps } from '@primeuix/utils';
import { defaultButtonProps, SpeedDialButton } from 'primereact/speeddial';
import * as React from 'react';

export const UISpeedDialButton = withComponent({
    name: 'SpeedDial.Button',
    defaultProps: defaultButtonProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={SpeedDialButton} attrs={rootProps} />;
    }
});
