'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ListboxFooter } from '@primereact/ui/listbox';
import { mergeDefaultProps } from '@primeuix/utils';
import { AutoCompleteFooter, defaultFooterProps } from 'primereact/autocomplete';
import * as React from 'react';

export const UIAutoCompleteFooter = withComponent({
    name: 'AutoComplete.Footer',
    defaultProps: defaultFooterProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxFooter }, instance.inProps);

        return <Component as={AutoCompleteFooter} attrs={rootProps} />;
    }
});
