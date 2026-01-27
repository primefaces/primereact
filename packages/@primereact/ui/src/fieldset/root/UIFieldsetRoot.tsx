'use client';
import { Component } from '@primereact/core/component';
import { styles as defaultFieldsetStyles } from '@primereact/styles/fieldset';
import { withComponent } from '@primereact/ui/base';
import { CollapsibleRoot } from '@primereact/ui/collapsible';
import { mergeDefaultProps } from '@primeuix/utils';
import { FieldsetRoot, defaultRootProps } from 'primereact/fieldset';
import * as React from 'react';

const styles = {
    ...defaultFieldsetStyles,
    classes: {
        ...defaultFieldsetStyles.classes,
        content: defaultFieldsetStyles.classes?.content,
        outer: defaultFieldsetStyles.classes?.contentOuter,
        inner: defaultFieldsetStyles.classes?.contentInner
    }
};

export const UIFieldsetRoot = withComponent({
    name: 'Fieldset.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const { inProps } = instance;

        const rootProps = mergeDefaultProps({ as: CollapsibleRoot, styles }, inProps);

        return <Component as={FieldsetRoot} attrs={rootProps} />;
    }
});
