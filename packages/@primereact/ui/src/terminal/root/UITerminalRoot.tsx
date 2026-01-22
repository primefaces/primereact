'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/terminal';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { TerminalRoot, defaultRootProps } from 'primereact/terminal';
import * as React from 'react';

export const UITerminalRoot = withComponent({
    name: 'Terminal.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={TerminalRoot} attrs={rootProps} />;
    }
});
