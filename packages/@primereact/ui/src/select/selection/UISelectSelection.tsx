'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ListboxSelection } from '@primereact/ui/listbox';
import { mergeDefaultProps } from '@primeuix/utils';
import { SelectSelection, defaultSelectionProps } from 'primereact/select';
import * as React from 'react';

export const UISelectSelection = withComponent({
    name: 'UISelectSelection',
    defaultProps: defaultSelectionProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxSelection }, instance.inProps);

        return <Component as={SelectSelection} attrs={rootProps} />;
    }
});
