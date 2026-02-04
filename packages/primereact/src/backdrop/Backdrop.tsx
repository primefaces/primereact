'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useMotion } from '@primereact/core/motion';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultBackdropProps } from './Backdrop.props';

export const Backdrop = withComponent({
    name: 'Backdrop',
    defaultProps: defaultBackdropProps,
    setup(instance) {
        const motion = useMotion({
            ...instance.props.motionProps,
            elementRef: instance.elementRef,
            visible: instance.props.visible
        });

        return { motion };
    },
    render(instance) {
        const { props, ptmi, motion } = instance;

        const rootProps = mergeProps(
            {
                className: props.className,
                style: props.style,
                'data-open': props.visible ? '' : undefined
            },
            ptmi('root')
        );

        return <Component pIf={motion.state.rendered} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
