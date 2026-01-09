'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { InputText } from '@primereact/ui/inputtext';
import { InputTagsInput, defaultInputProps } from 'primereact/inputtags';
import * as React from 'react';

export const UIInputTagsInput = withComponent({
    name: 'UIInputTagsInput',
    defaultProps: defaultInputProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: InputText }, instance.inProps);

        return <Component as={InputTagsInput} attrs={rootProps} />;
    }
});
