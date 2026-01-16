'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { ListboxFooter } from '@primereact/ui/listbox';
import { SelectFooter, defaultFooterProps } from 'primereact/select';
import * as React from 'react';

export const UISelectFooter = withComponent({
    name: 'UISelectFooter',
    defaultProps: defaultFooterProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxFooter }, instance.inProps);

        return <Component as={SelectFooter} attrs={rootProps} />;
    }
});
