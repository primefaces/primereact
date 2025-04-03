'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './CheckboxGroup.props';

interface CheckboxGroupProps {
    children?: React.ReactNode;
}

export const CheckboxGroup = (inProps: CheckboxGroupProps) => {
    const instance = useComponent(inProps, defaultProps);
    const {
        id,
        props,
        ptmi,
        cx,
        // element refs
        elementRef
    } = instance;

    const rootProps = mergeProps(
        {
            id,
            className: cx('root')
        },
        ptmi('root')
    );

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

CheckboxGroup.displayName = 'PrimeReact.CheckboxGroup';
