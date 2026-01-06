'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/textarea';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { Textarea, defaultProps } from 'primereact/textarea';
import * as React from 'react';

export const UITextarea = withComponent({
    name: 'Textarea',
    defaultProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={Textarea} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
