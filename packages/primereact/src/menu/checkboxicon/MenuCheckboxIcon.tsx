'use client';
import { Component } from '@primereact/core/component';
import { Icon } from '@primereact/core/icon';
import { BlankIcon } from '@primereact/icons/blank';
import { CheckIcon } from '@primereact/icons/check';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useMenuContext } from '../Menu.context';
import { useMenuCheckboxItemContext } from '../checkboxitem/MenuCheckboxItem.context';
import { defaultCheckboxIconProps } from './MenuCheckboxIcon.props';

export const MenuCheckboxIcon = withComponent({
    name: 'MenuCheckboxIcon',
    defaultProps: defaultCheckboxIconProps,
    setup() {
        const menu = useMenuContext();
        const checkboxitem = useMenuCheckboxItemContext();

        return { menu, checkboxitem };
    },
    render(instance) {
        const { props, ptmi, menu, checkboxitem } = instance;

        const rootProps = mergeProps(
            {
                className: menu?.cx('checkboxIcon')
            },
            menu?.ptm('checkboxIcon'),
            ptmi('root')
        );

        return props.children ? <Component as={Icon} instance={instance} attrs={rootProps} children={props.children} /> : checkboxitem?.checked ? <CheckIcon {...rootProps} /> : <BlankIcon {...rootProps} />;
    }
});
