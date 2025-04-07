'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import { useAvatar } from '@primereact/headless/avatar';
import { styles } from '@primereact/styles/avatar';
import type { AvatarProps } from '@primereact/types/shared/avatar';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Avatar.props';
import { AvatarGroup } from './group';

export const Avatar = (inProps: AvatarProps) => {
    const avatar = useAvatar(inProps);
    const instance = useComponent(inProps, defaultProps, styles, avatar);
    const {
        id,
        props,
        state,
        ptmi,
        ptm,
        cx,
        // element refs
        elementRef,
        // methods
        onError
    } = instance;

    const getPTOptions = (key: string) => {
        const _ptm = key === 'root' ? ptmi : ptm;

        return _ptm(key, {
            context: {}
        });
    };

    const createLabelElement = () => {
        if (!props?.label) return;

        const labelProps = mergeProps(
            {
                className: cx('label')
            },
            getPTOptions('label')
        );

        return (
            <span data-taner {...labelProps}>
                {props.label}
            </span>
        );
    };

    const createImageElement = () => {
        if (!props?.image) return;

        const imageProps = mergeProps(
            {
                className: cx('image'),
                src: props.image
            },
            getPTOptions('image')
        );

        return <img {...imageProps} />;
    };

    const createIconElement = () => {
        if (!props?.icon) return;

        const isString = typeof props.icon === 'string';
        const iconProps = mergeProps(
            {
                className: cx('icon') + (isString ? ` ${props.icon}` : '')
            },
            getPTOptions('icon')
        );

        return <span {...iconProps}>{isString ? null : props.icon}</span>;
    };

    const label = createLabelElement();
    const image = createImageElement();
    const icon = createIconElement();

    const rootProps = mergeProps(
        {
            id,
            className: cx('root')
        },
        ptmi('root')
    );

    console.log(rootProps);

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {label}
                {image}
                {icon}
            </Component>
        </ComponentProvider>
    );
};

Avatar.displayName = 'PrimeReact.Avatar';
Avatar.Group = AvatarGroup;
