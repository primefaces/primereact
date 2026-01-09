'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/button';
import { withComponent } from '@primereact/ui/base';
import { Button, defaultProps } from 'primereact/button';
import * as React from 'react';

export const UIButton = withComponent({
    name: 'UIButton',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={Button} attrs={rootProps} />;
    }
});
