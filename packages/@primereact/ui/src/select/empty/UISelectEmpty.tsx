'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { ListboxEmpty } from '@primereact/ui/listbox';
import { SelectEmpty, defaultEmptyProps } from 'primereact/select';
import * as React from 'react';

export const UISelectEmpty = withComponent({
    name: 'UISelectEmpty',
    defaultProps: defaultEmptyProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: ListboxEmpty }, instance.inProps);

        return <Component as={SelectEmpty} attrs={rootProps} />;
    }
});
