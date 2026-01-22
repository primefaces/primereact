'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ListboxEmpty } from '@primereact/ui/listbox';
import { mergeDefaultProps } from '@primeuix/utils';
import { AutoCompleteEmpty, defaultEmptyProps } from 'primereact/autocomplete';
import * as React from 'react';

export const UIAutoCompleteEmpty = withComponent({
    name: 'AutoComplete.Empty',
    defaultProps: defaultEmptyProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxEmpty }, instance.inProps);

        return <Component as={AutoCompleteEmpty} attrs={rootProps} />;
    }
});
