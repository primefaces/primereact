'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/fileupload';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { FileUploadRoot, defaultRootProps } from 'primereact/fileupload';
import * as React from 'react';

export const UIFileUploadRoot = withComponent({
    name: 'FileUploadRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={FileUploadRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
