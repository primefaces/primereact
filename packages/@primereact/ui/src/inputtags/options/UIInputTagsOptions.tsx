'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { ListboxOptions } from '@primereact/ui/listbox';
import { defaultOptionsProps, InputTagsOptions } from 'primereact/inputtags';
import * as React from 'react';

export const UIInputTagsOptions = withComponent({
    name: 'UIInputTagsOptions',
    defaultProps: defaultOptionsProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxOptions }, instance.inProps);

        return <Component as={InputTagsOptions} attrs={rootProps} />;
    }
});
