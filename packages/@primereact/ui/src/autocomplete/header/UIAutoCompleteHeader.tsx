'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ListboxHeader } from '@primereact/ui/listbox';
import { mergeDefaultProps } from '@primeuix/utils';
import { AutoCompleteHeader, defaultHeaderProps } from 'primereact/autocomplete';
import * as React from 'react';

export const UIAutoCompleteHeader = withComponent({
    name: 'AutoComplete.Header',
    defaultProps: defaultHeaderProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxHeader }, instance.inProps);

        return <Component as={AutoCompleteHeader} attrs={rootProps} />;
    }
});
