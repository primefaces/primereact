'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ListboxOptions } from '@primereact/ui/listbox';
import { mergeDefaultProps } from '@primeuix/utils';
import { defaultOptionsProps, InputTagsOptions } from 'primereact/inputtags';
import * as React from 'react';

export const UIInputTagsOptions = withComponent({
    name: 'InputTags.Options',
    defaultProps: defaultOptionsProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxOptions }, instance.inProps);

        return <Component as={InputTagsOptions} attrs={rootProps} />;
    }
});
