'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ListboxSelection } from '@primereact/ui/listbox';
import { mergeDefaultProps } from '@primeuix/utils';
import { AutoCompleteSelection, defaultSelectionProps } from 'primereact/autocomplete';
import * as React from 'react';

export const UIAutoCompleteSelection = withComponent({
    name: 'UIAutoCompleteSelection',
    defaultProps: defaultSelectionProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxSelection }, instance.inProps);

        return <Component as={AutoCompleteSelection} attrs={rootProps} />;
    }
});
