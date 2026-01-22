'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/button';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { Button, defaultProps } from 'primereact/button';
import * as React from 'react';

export const UIButton = withComponent({
    name: 'Button',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={Button} attrs={rootProps} />;
    }
});
