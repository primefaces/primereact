'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/accordion';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { AccordionRoot, defaultRootProps } from 'primereact/accordion';
import * as React from 'react';

export const UIAccordionRoot = withComponent({
    name: 'AccordionRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={AccordionRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
