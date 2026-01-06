'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/focustrap';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { FocusTrap, defaultProps } from 'primereact/focustrap';
import * as React from 'react';

export const UIFocusTrap = withComponent({
    name: 'FocusTrap',
    defaultProps: defaultProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={FocusTrap} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
