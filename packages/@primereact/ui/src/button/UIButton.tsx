'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/button';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { Button, defaultProps } from 'primereact/button';
import * as React from 'react';

export const UIButton = withComponent({
    name: 'UIButton',
    defaultProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={Button} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
