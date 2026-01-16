'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/select';
import { withComponent } from '@primereact/ui/base';
import { SelectRoot, defaultRootProps } from 'primereact/select';
import * as React from 'react';

export const UISelectRoot = withComponent({
    name: 'UISelectRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={SelectRoot} attrs={rootProps} />;
    }
});
