'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/accordion';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { AccordionRoot, defaultRootProps } from 'primereact/accordion';
import * as React from 'react';

export const UIAccordionRoot = withComponent({
    name: 'Accordion.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={AccordionRoot} attrs={rootProps} />;
    }
});
