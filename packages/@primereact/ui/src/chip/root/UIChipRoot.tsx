'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/chip';
import { withComponent } from '@primereact/ui/base';
import { ChipRoot, defaultRootProps } from 'primereact/chip';
import * as React from 'react';

export const UIChipRoot = withComponent({
    name: 'UIChipRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ChipRoot} attrs={rootProps} />;
    }
});
