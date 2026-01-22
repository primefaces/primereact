'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useMotion } from '@primereact/core/motion';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCollapsibleContext } from '../Collapsible.context';
import { defaultContentProps } from './CollapsibleContent.props';

export const CollapsibleContent = withComponent({
    name: 'Collapsible.Content',
    defaultProps: defaultContentProps,
    setup(instance) {
        const collapsible = useCollapsibleContext();
        const motion = useMotion({ name: 'p-collapsible', ...collapsible?.props.motionProps, elementRef: instance.elementRef, visible: collapsible?.state.open });

        return { collapsible, motion };
    },
    render(instance) {
        const { props, ptmi, collapsible, motion } = instance;

        const rootProps = mergeProps(
            {
                id: collapsible?.id + '_content',
                className: collapsible?.cx('content'),
                role: 'region',
                'aria-hidden': !collapsible?.state.open,
                [collapsible?.state.open ? 'data-open' : 'data-closed']: ''
            },
            collapsible?.ptm('content'),
            ptmi('root')
        );

        return <Component pIf={collapsible?.props.lazy ? motion.state.rendered : true} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
