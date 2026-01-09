'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { ListboxRoot } from '@primereact/ui/listbox';
import { AutoCompleteList, defaultListProps } from 'primereact/autocomplete';
import * as React from 'react';

export const UIAutoCompleteList = withComponent({
    name: 'UIAutoCompleteList',
    defaultProps: defaultListProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxRoot }, instance.inProps);

        return <Component as={AutoCompleteList} attrs={rootProps} />;
    }
});
