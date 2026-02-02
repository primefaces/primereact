'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useIconFieldContext } from '../IconField.context';
import { defaultIconProps } from './IconFieldIcon.props';

export const IconFieldIcon = withComponent({
    name: 'IconField.Icon',
    defaultProps: defaultIconProps,
    setup() {
        const iconfield = useIconFieldContext();

        return { iconfield };
    },
    render(instance) {
        const { props, ptmi, iconfield } = instance;

        const rootProps = mergeProps(
            {
                className: iconfield?.cx('icon')
            },
            iconfield?.ptm('icon'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
