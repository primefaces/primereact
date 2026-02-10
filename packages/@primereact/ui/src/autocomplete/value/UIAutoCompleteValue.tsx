'use client';
import { Component, withComponent } from '@primereact/core/component';
import { InputText } from '@primereact/ui/inputtext';
import { mergeDefaultProps } from '@primeuix/utils';
import { AutoCompleteValue, defaultValueProps } from 'primereact/autocomplete';
import * as React from 'react';

export const UIAutoCompleteValue = withComponent({
    name: 'AutoComplete.Value',
    defaultProps: defaultValueProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: InputText }, instance.inProps);

        return <Component as={AutoCompleteValue} attrs={rootProps} />;
    }
});
