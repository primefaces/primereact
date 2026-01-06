'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/fieldset';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { FieldsetRoot, defaultRootProps } from 'primereact/fieldset';
import * as React from 'react';

export const UIFieldsetRoot = withComponent({
    name: 'FieldsetRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={FieldsetRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
