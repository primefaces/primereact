'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { ListboxOptions } from '@primereact/ui/listbox';
import { SelectOptions, defaultOptionsProps } from 'primereact/select';
import * as React from 'react';

export const UISelectOptions = withComponent({
    name: 'UISelectOptions',
    defaultProps: defaultOptionsProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxOptions }, instance.inProps);

        return <Component as={SelectOptions} attrs={rootProps} />;
    }
});
