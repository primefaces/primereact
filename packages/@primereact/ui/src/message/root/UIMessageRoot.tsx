'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/message';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { MessageRoot, defaultRootProps } from 'primereact/message';
import * as React from 'react';

export const UIMessageRoot = withComponent({
    name: 'Message.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={MessageRoot} attrs={rootProps} />;
    }
});
