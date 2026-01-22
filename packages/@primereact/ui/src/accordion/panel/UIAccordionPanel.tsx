'use client';
import { Component, withComponent } from '@primereact/core/component';
import { CollapsibleRoot } from '@primereact/ui/collapsible';
import { mergeDefaultProps } from '@primeuix/utils';
import { AccordionPanel, defaultPanelProps, useAccordionContext } from 'primereact/accordion';
import * as React from 'react';

export const UIAccordionPanel = withComponent({
    name: 'Accordion.Panel',
    defaultProps: defaultPanelProps,
    setup() {
        const accordion = useAccordionContext();

        return { accordion };
    },
    render(instance) {
        const { accordion, inProps } = instance;
        const collapsibleStyles = React.useMemo(
            () => ({
                classes: {
                    content: accordion?.cx('content'),
                    outer: accordion?.cx('contentOuter'),
                    inner: accordion?.cx('contentInner')
                }
            }),
            [accordion]
        );

        const rootProps = mergeDefaultProps({ as: CollapsibleRoot, styles: collapsibleStyles }, inProps);

        return <Component as={AccordionPanel} attrs={rootProps} />;
    }
});
