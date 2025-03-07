'use client';
import { Component, ComponentProvider } from '@primereact/core/component';
import { usePanel } from '@primereact/headless/panel';
import { useProps } from '@primereact/hooks';
import { styles } from '@primereact/styles/panel';
import * as React from 'react';
import { defaultProps } from './Panel.props';

const getCurrentInstance = (inInstance, inProps, defaultProps) => {
    const { props, attrs } = useProps(inProps, defaultProps);

    return {
        ...inInstance,
        props,
        attrs
    };
};

export const Panel = (inProps) => {
    const panel = usePanel({ props: inProps, styles });
    const instance = getCurrentInstance(panel, inProps, defaultProps);

    const {
        props,
        // element refs
        elementRef
    } = instance;

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'div'} ref={elementRef}>
                TESTTT
            </Component>
        </ComponentProvider>
    );
};
