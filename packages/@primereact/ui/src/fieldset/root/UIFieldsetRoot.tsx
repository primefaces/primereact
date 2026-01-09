'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/fieldset';
import { withComponent } from '@primereact/ui/base';
import { FieldsetRoot, defaultRootProps } from 'primereact/fieldset';
import * as React from 'react';

export const UIFieldsetRoot = withComponent({
    name: 'UIFieldsetRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={FieldsetRoot} attrs={rootProps} />;
    }
});
