'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ListboxOption } from '@primereact/ui/listbox';
import { mergeDefaultProps } from '@primeuix/utils';
import { AutoCompleteOption, defaultOptionProps } from 'primereact/autocomplete';
import * as React from 'react';

export const UIAutoCompleteOption = withComponent({
    name: 'UIAutoCompleteOption',
    defaultProps: defaultOptionProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxOption }, instance.inProps);

        return <Component as={AutoCompleteOption} attrs={rootProps} />;
    }
});
