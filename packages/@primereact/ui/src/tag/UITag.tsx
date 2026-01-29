'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/tag';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { Tag, defaultProps } from 'primereact/tag';
import * as React from 'react';

export const UITag = withComponent({
    name: 'Tag',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={Tag} attrs={rootProps} />;
    }
});
