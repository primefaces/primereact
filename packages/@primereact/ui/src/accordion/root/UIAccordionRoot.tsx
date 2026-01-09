'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/accordion';
import { withComponent } from '@primereact/ui/base';
import { AccordionRoot, defaultRootProps } from 'primereact/accordion';
import * as React from 'react';

export const UIAccordionRoot = withComponent({
    name: 'UIAccordionRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={AccordionRoot} attrs={rootProps} />;
    }
});
