'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/autocomplete';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { AutoCompleteRoot, defaultRootProps } from 'primereact/autocomplete';
import * as React from 'react';

export const UIAutoCompleteRoot = withComponent({
    name: 'AutoComplete.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={AutoCompleteRoot} attrs={rootProps} />;
    }
});
