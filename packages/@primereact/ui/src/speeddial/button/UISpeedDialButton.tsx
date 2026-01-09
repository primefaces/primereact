'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { Button } from '@primereact/ui/button';
import { defaultButtonProps, SpeedDialButton } from 'primereact/speeddial';
import * as React from 'react';

export const UISpeedDialButton = withComponent({
    name: 'UISpeedDialButton',
    defaultProps: defaultButtonProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={SpeedDialButton} attrs={rootProps} />;
    }
});
