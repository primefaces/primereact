'use client';
import { Component, withComponent } from '@primereact/core/component';
import { CollapsibleContent } from '@primereact/ui/collapsible';
import { mergeDefaultProps } from '@primeuix/utils';
import { FieldsetContent, defaultContentProps } from 'primereact/fieldset';
import * as React from 'react';

export const UIFieldsetContent = withComponent({
    name: 'Fieldset.Content',
    defaultProps: defaultContentProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: CollapsibleContent }, instance.inProps);

        return <Component as={FieldsetContent} attrs={rootProps} />;
    }
});
