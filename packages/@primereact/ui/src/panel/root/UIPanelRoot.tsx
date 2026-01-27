'use client';
import { Component } from '@primereact/core/component';
import { styles as defaultPanelStyles } from '@primereact/styles/panel';
import { withComponent } from '@primereact/ui/base';
import { CollapsibleRoot } from '@primereact/ui/collapsible';
import { mergeDefaultProps } from '@primeuix/utils';
import { PanelRoot, defaultRootProps } from 'primereact/panel';
import * as React from 'react';

const styles = {
    ...defaultPanelStyles,
    classes: {
        ...defaultPanelStyles.classes,
        content: defaultPanelStyles.classes?.content,
        outer: defaultPanelStyles.classes?.contentOuter,
        inner: defaultPanelStyles.classes?.contentInner
    }
};

export const UIPanelRoot = withComponent({
    name: 'Panel.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const { inProps } = instance;

        const rootProps = mergeDefaultProps({ as: CollapsibleRoot, styles }, inProps);

        return <Component as={PanelRoot} attrs={rootProps} />;
    }
});
