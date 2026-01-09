'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/listbox';
import { withComponent } from '@primereact/ui/base';
import { ListboxRoot, defaultRootProps } from 'primereact/listbox';
import * as React from 'react';

export const UIListboxRoot = withComponent({
    name: 'UIListboxRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ListboxRoot} attrs={rootProps} />;
    }
});
