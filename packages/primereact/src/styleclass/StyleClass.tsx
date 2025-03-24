'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import { useStyleClass } from '@primereact/headless/styleclass';
import { StyleClassProps } from '@primereact/types/shared/styleclass';
import * as React from 'react';
import { defaultProps } from './StyleClass.props';

export const StyleClass = (inProps: StyleClassProps) => {
    const styleclass = useStyleClass(inProps);
    const instance = useComponent(inProps, defaultProps, {}, styleclass);
    const {
        props,
        ptmi,
        // element refs
        elementRef
    } = instance;

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as} {...ptmi('root')} ref={elementRef}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

StyleClass.displayName = 'PrimeReact.StyleClass';
