'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { ListboxOption } from '@primereact/ui/listbox';
import { defaultOptionProps, InputTagsOption } from 'primereact/inputtags';
import * as React from 'react';

export const UIInputTagsOption = withComponent({
    name: 'UIInputTagsOption',
    defaultProps: defaultOptionProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxOption }, instance.inProps);

        return <Component as={InputTagsOption} attrs={rootProps} />;
    }
});
