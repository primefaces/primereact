'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ListboxRoot } from '@primereact/ui/listbox';
import { mergeDefaultProps } from '@primeuix/utils';
import { defaultListProps, InputTagsList } from 'primereact/inputtags';
import * as React from 'react';

export const UIInputTagsList = withComponent({
    name: 'UIInputTagsList',
    defaultProps: defaultListProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxRoot }, instance.inProps);

        return <Component as={InputTagsList} attrs={rootProps} />;
    }
});
