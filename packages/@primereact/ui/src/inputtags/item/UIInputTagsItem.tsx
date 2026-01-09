'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { ChipRoot } from '@primereact/ui/chip';
import { InputTagsItem, defaultItemProps } from 'primereact/inputtags';
import * as React from 'react';

export const UIInputTagsItem = withComponent({
    name: 'UIInputTagsItem',
    defaultProps: defaultItemProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ChipRoot }, instance.inProps);

        return <Component as={InputTagsItem} attrs={rootProps} />;
    }
});
