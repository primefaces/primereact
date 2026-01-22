'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/fileupload';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { FileUploadRoot, defaultRootProps } from 'primereact/fileupload';
import * as React from 'react';

export const UIFileUploadRoot = withComponent({
    name: 'UIFileUploadRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={FileUploadRoot} attrs={rootProps} />;
    }
});
