'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Icon } from '@primereact/core/icon';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTreeContext } from '../Tree.context';
import { defaultIconProps } from './TreeIcon.props';

export const TreeIcon = withComponent({
    name: 'TreeIcon',
    defaultProps: defaultIconProps,
    setup() {
        const tree = useTreeContext();

        return { tree };
    },
    render(instance) {
        const { props, ptmi, tree } = instance;

        const rootProps = mergeProps(
            {
                className: tree?.cx('icon')
            },
            tree?.ptm('icon'),
            ptmi('root')
        );

        return <Component as={Icon} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
