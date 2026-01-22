'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ListboxOption } from '@primereact/ui/listbox';
import { mergeDefaultProps } from '@primeuix/utils';
import { SelectOption, defaultOptionProps } from 'primereact/select';
import * as React from 'react';

export const UISelectOption = withComponent({
    name: 'UISelectOption',
    defaultProps: defaultOptionProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxOption }, instance.inProps);

        return <Component as={SelectOption} attrs={rootProps} />;
    }
});
