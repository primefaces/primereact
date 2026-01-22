'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ListboxRoot } from '@primereact/ui/listbox';
import { mergeDefaultProps } from '@primeuix/utils';
import { AutoCompleteList, defaultListProps } from 'primereact/autocomplete';
import * as React from 'react';

export const UIAutoCompleteList = withComponent({
    name: 'AutoComplete.List',
    defaultProps: defaultListProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxRoot }, instance.inProps);

        return <Component as={AutoCompleteList} attrs={rootProps} />;
    }
});
