'use client';
import { Component, ComponentProvider } from '@primereact/core/component';
import { getCurrentInstance } from '@primereact/core/utils';
import { useCard } from '@primereact/headless/card';
import { styles } from '@primereact/styles/panel';
import * as React from 'react';
import { defaultProps } from './Card.props';

export const Card = (inProps) => {
    const card = useCard(inProps, { styles });
    const instance = getCurrentInstance(card, inProps, defaultProps);
    const {
        id,
        props,
        state,
        ptm,
        ptmi,
        cx,
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
                {inProps.children}
            </Component>
        </ComponentProvider>
    );
};
