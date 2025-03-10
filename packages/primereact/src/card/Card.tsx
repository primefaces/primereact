'use client';
import { Component, ComponentProvider, withComponent } from '@primereact/core/component';
import { getCurrentInstance } from '@primereact/core/utils';
import { useCard } from '@primereact/headless/card';
import { styles } from '@primereact/styles/panel';
import * as React from 'react';
import { defaultProps } from './Card.props';

export const Card = withComponent(
    (inInstance, ref) => {
        const card = useCard(inInstance.inProps, ref);
        const instance = getCurrentInstance(inInstance, card);
        const {
            id,
            props,
            state,
            // element refs
            elementRef,
            contentRef,
            // methods
            onButtonClick,
            // computed
            buttonAriaLabel
        } = instance;

        return (
            <ComponentProvider pIf={props.pIf} instance={instance}>
                <Component as={props.as || 'section'} ref={elementRef}>
                    {props.children}
                </Component>
            </ComponentProvider>
        );
    },
    defaultProps,
    styles
);
