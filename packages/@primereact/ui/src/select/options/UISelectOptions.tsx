'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ListboxOptions } from '@primereact/ui/listbox';
import { mergeDefaultProps } from '@primeuix/utils';
import { SelectOptions, defaultOptionsProps } from 'primereact/select';
import * as React from 'react';

export const UISelectOptions = withComponent({
    name: 'Select.Options',
    defaultProps: defaultOptionsProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxOptions }, instance.inProps);

        return <Component as={SelectOptions} attrs={rootProps} />;
    }
});
