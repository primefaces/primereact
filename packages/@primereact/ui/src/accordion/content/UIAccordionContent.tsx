'use client';
import { Component, withComponent } from '@primereact/core/component';
import { CollapsibleContent } from '@primereact/ui/collapsible';
import { mergeDefaultProps } from '@primeuix/utils';
import { AccordionContent, defaultContentProps } from 'primereact/accordion';
import * as React from 'react';

export const UIAccordionContent = withComponent({
    name: 'Accordion.Content',
    defaultProps: defaultContentProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: CollapsibleContent }, instance.inProps);

        return <Component as={AccordionContent} attrs={rootProps} />;
    }
});
