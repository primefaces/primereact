'use client';
import { MinusIcon, PlusIcon } from '@primereact/icons';
import type { ButtonProps } from '@primereact/types/shared/button';
import { mergeProps, resolve } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Button } from 'primereact/button';
import * as React from 'react';
import { usePanelContext } from '../Panel.context';
import { defaultCollapseProps } from './PanelCollapse.props';

export const PanelCollapse = withComponent({
    name: 'PanelCollapse',
    defaultProps: defaultCollapseProps,
    setup() {
        const panel = usePanelContext();

        return { panel };
    },
    render(instance) {
        const { props, ptmi, panel } = instance;

        const rootProps = mergeProps(
            {
                type: 'button',
                className: panel?.cx('collapse'),
                'aria-controls': panel?.id + '_content',
                'aria-expanded': !panel?.state.collapsed,
                onClick: panel?.onButtonClick
            },
            panel?.ptm('collapse'),
            ptmi('root')
        );

        return (
            <Button {...(props as ButtonProps)} {...rootProps}>
                {props.children ? resolve(props.children, instance) : panel?.state.collapsed ? <PlusIcon /> : <MinusIcon />}
            </Button>
        );
    }
});
