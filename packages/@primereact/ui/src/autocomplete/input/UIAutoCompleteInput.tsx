'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { InputText } from '@primereact/ui/inputtext';
import { AutoCompleteInput, defaultInputProps } from 'primereact/autocomplete';
import * as React from 'react';

export const UIAutoCompleteInput = withComponent({
    name: 'UIAutoCompleteInput',
    defaultProps: defaultInputProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: InputText }, instance.inProps);

        return <Component as={AutoCompleteInput} attrs={rootProps} />;
    }
});
