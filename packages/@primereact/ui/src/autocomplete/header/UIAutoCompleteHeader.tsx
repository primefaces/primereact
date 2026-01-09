'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { ListboxHeader } from '@primereact/ui/listbox';
import { AutoCompleteHeader, defaultHeaderProps } from 'primereact/autocomplete';
import * as React from 'react';

export const UIAutoCompleteHeader = withComponent({
    name: 'UIAutoCompleteHeader',
    defaultProps: defaultHeaderProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxHeader }, instance.inProps);

        return <Component as={AutoCompleteHeader} attrs={rootProps} />;
    }
});
