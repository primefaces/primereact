'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { ListboxFooter } from '@primereact/ui/listbox';
import { AutoCompleteFooter, defaultFooterProps } from 'primereact/autocomplete';
import * as React from 'react';

export const UIAutoCompleteFooter = withComponent({
    name: 'UIAutoCompleteFooter',
    defaultProps: defaultFooterProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxFooter }, instance.inProps);

        return <Component as={AutoCompleteFooter} attrs={rootProps} />;
    }
});
