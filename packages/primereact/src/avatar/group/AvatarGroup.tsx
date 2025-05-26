'use client';
import { Component } from '@primereact/core/component';
import { groupStyles } from '@primereact/styles/avatar';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { defaultGroupProps } from './AvatarGroup.props';

export const AvatarGroup = withComponent({
    name: 'AvatarGroup',
    defaultProps: defaultGroupProps,
    styles: groupStyles,
    render(instance) {
        const { props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                className: cx('root')
            },
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
