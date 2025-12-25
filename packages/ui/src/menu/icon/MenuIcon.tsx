'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Icon } from '@primereact/core/icon';
import { AngleDownIcon } from '@primereact/icons/angledown';
import { AngleRightIcon } from '@primereact/icons/angleright';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useMenuContext } from '../Menu.context';
import { useMenuSubContext } from '../sub/MenuSub.context';
import { defaultIconProps } from './MenuIcon.props';

export const MenuIcon = withComponent({
    name: 'MenuIcon',
    defaultProps: defaultIconProps,
    setup() {
        const menu = useMenuContext();
        const submenu = useMenuSubContext();

        return { menu, submenu };
    },
    render(instance) {
        const { props, ptmi, menu, submenu } = instance;

        const rootProps = mergeProps(
            {
                className: menu?.cx('icon')
            },
            menu?.ptm('icon'),
            ptmi('root')
        );

        return props.children ? (
            <Component as={Icon} instance={instance} attrs={rootProps} children={props.children} />
        ) : submenu ? (
            menu?.props.composite ? (
                <AngleRightIcon {...rootProps} />
            ) : (
                <AngleDownIcon {...rootProps} rotate={submenu.state.opened ? 180 : 0} />
            )
        ) : null;
    }
});
