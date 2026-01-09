'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { ListboxEmpty } from '@primereact/ui/listbox';
import { AutoCompleteEmpty, defaultEmptyProps } from 'primereact/autocomplete';
import * as React from 'react';

export const UIAutoCompleteEmpty = withComponent({
    name: 'UIAutoCompleteEmpty',
    defaultProps: defaultEmptyProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxEmpty }, instance.inProps);

        return <Component as={AutoCompleteEmpty} attrs={rootProps} />;
    }
});
