'use client';
import { Component, ComponentProvider } from '@primereact/core/component';
import { useComponent } from '@primereact/core/component/useComponent';
import { useButton } from '@primereact/headless/button';
import { styles } from '@primereact/styles/panel';
import type { ButtonProps } from '@primereact/types/shared/button';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Button.props';

export const Button = (inProps: ButtonProps) => {
    const panel = useButton(inProps);
    const instance = useComponent(inProps, defaultProps, styles, panel);
    const {
        id,
        props,
        ptm,
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

Button.displayName = 'PrimeReact.Button';
