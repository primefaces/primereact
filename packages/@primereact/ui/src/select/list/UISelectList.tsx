'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { ListboxRoot } from '@primereact/ui/listbox';
import { SelectList, defaultListProps } from 'primereact/select';
import * as React from 'react';

export const UISelectList = withComponent({
    name: 'UISelectList',
    defaultProps: defaultListProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxRoot }, instance.inProps);

        return <Component as={SelectList} attrs={rootProps} />;
    }
});
