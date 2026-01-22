'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ListboxFooter } from '@primereact/ui/listbox';
import { mergeDefaultProps } from '@primeuix/utils';
import { SelectFooter, defaultFooterProps } from 'primereact/select';
import * as React from 'react';

export const UISelectFooter = withComponent({
    name: 'Select.Footer',
    defaultProps: defaultFooterProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxFooter }, instance.inProps);

        return <Component as={SelectFooter} attrs={rootProps} />;
    }
});
