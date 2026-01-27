'use client';
import { Component, withComponent } from '@primereact/core/component';
import { CollapsibleTrigger } from '@primereact/ui/collapsible';
import { mergeDefaultProps } from '@primeuix/utils';
import { FieldsetTrigger, defaultTriggerProps } from 'primereact/fieldset';
import * as React from 'react';

export const UIFieldsetTrigger = withComponent({
    name: 'Fieldset.Trigger',
    defaultProps: defaultTriggerProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: CollapsibleTrigger }, instance.inProps);

        return <Component as={FieldsetTrigger} attrs={rootProps} />;
    }
});
