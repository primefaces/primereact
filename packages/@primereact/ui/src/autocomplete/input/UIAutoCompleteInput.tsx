'use client';
import { Component, withComponent } from '@primereact/core/component';
import { InputText } from '@primereact/ui/inputtext';
import { mergeDefaultProps } from '@primeuix/utils';
import { AutoCompleteInput, defaultInputProps } from 'primereact/autocomplete';
import * as React from 'react';

export const UIAutoCompleteInput = withComponent({
    name: 'AutoComplete.Input',
    defaultProps: defaultInputProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: InputText }, instance.inProps);

        return <Component as={AutoCompleteInput} attrs={rootProps} />;
    }
});
