'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/tag';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { TagRoot, defaultRootProps } from 'primereact/tag';
import * as React from 'react';

export const UITagRoot = withComponent({
    name: 'Tag.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={TagRoot} attrs={rootProps} />;
    }
});
