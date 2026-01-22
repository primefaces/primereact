'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ListboxOptions } from '@primereact/ui/listbox';
import { mergeDefaultProps } from '@primeuix/utils';
import { AutoCompleteOptions, defaultOptionsProps } from 'primereact/autocomplete';
import * as React from 'react';

export const UIAutoCompleteOptions = withComponent({
    name: 'UIAutoCompleteOptions',
    defaultProps: defaultOptionsProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxOptions }, instance.inProps);

        return <Component as={AutoCompleteOptions} attrs={rootProps} />;
    }
});
