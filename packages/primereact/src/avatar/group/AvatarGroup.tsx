'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import { styles } from '@primereact/styles/avatar';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './AvatarGroup.props';

interface AvatarGroupProps {
    children?: React.ReactNode;
}

export const AvatarGroup = (inProps: AvatarGroupProps) => {
    const instance = useComponent(inProps, defaultProps, styles);
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
            className: cx('group')
        },
        ptmi('group')
    );

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

AvatarGroup.displayName = 'PrimeReact.AvatarGroup';
