'use client';
import { Component } from '@primereact/core/component';
import { Icon } from '@primereact/core/icon';
import { BlankIcon } from '@primereact/icons/blank';
import { DotIcon } from '@primereact/icons/dot';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useMenuContext } from '../Menu.context';
import { useMenuRadioItemContext } from '../radioitem/MenuRadioItem.context';
import { defaultRadioIconProps } from './MenuRadioIcon.props';

export const MenuRadioIcon = withComponent({
    name: 'MenuRadioIcon',
    defaultProps: defaultRadioIconProps,
    setup() {
        const menu = useMenuContext();
        const radioitem = useMenuRadioItemContext();

        return { menu, radioitem };
    },
    render(instance) {
        const { props, ptmi, menu, radioitem } = instance;

        const rootProps = mergeProps(
            {
                className: menu?.cx('radioIcon')
            },
            menu?.ptm('radioIcon'),
            ptmi('root')
        );

        return props.children ? <Component as={Icon} instance={instance} attrs={rootProps} children={props.children} /> : radioitem?.checked ? <DotIcon {...rootProps} /> : <BlankIcon {...rootProps} />;
    }
});
