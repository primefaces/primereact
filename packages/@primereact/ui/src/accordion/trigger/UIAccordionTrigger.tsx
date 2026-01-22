'use client';
import { Component, withComponent } from '@primereact/core/component';
import { CollapsibleTrigger } from '@primereact/ui/collapsible';
import { mergeDefaultProps } from '@primeuix/utils';
import { AccordionTrigger, defaultTriggerProps } from 'primereact/accordion';
import * as React from 'react';

export const UIAccordionTrigger = withComponent({
    name: 'Accordion.Trigger',
    defaultProps: defaultTriggerProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: CollapsibleTrigger }, instance.inProps);

        return <Component as={AccordionTrigger} attrs={rootProps} />;
    }
});
