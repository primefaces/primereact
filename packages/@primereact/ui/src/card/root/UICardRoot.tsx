'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/card';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { CardRoot, defaultRootProps } from 'primereact/card';
import * as React from 'react';

export const UICardRoot = withComponent({
    name: 'UICardRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={CardRoot} attrs={rootProps} />;
    }
});
