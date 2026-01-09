'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/inputtags';
import { withComponent } from '@primereact/ui/base';
import { InputTagsRoot, defaultRootProps } from 'primereact/inputtags';
import * as React from 'react';

export const UIInputTagsRoot = withComponent({
    name: 'UIInputTagsRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={InputTagsRoot} attrs={rootProps} />;
    }
});
