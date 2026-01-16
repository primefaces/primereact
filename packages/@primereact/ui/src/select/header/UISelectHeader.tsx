'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { ListboxHeader } from '@primereact/ui/listbox';
import { SelectHeader, defaultHeaderProps } from 'primereact/select';
import * as React from 'react';

export const UISelectHeader = withComponent({
    name: 'UISelectHeader',
    defaultProps: defaultHeaderProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxHeader }, instance.inProps);

        return <Component as={SelectHeader} attrs={rootProps} />;
    }
});
