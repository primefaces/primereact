'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/commandmenu';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useCommandMenuContext } from '../CommandMenu.context';
import { defaultEmptyProps } from './CommandMenuEmpty.props';

export const CommandMenuEmpty = withComponent({
    name: 'CommandMenuEmpty',
    defaultProps: defaultEmptyProps,
    styles,
    setup() {
        const commandmenu = useCommandMenuContext();

        return {
            commandmenu
        };
    },
    render(instance) {
        const { props, ptmi, commandmenu } = instance;

        const isRender = commandmenu?.useCommandMenuStore((state) => {
            return state.filtered.count === 0;
        });
        const rootProps = mergeProps(
            {
                className: commandmenu?.cx('empty')
            },
            commandmenu?.ptm('empty'),
            ptmi('root')
        );

        return <Component pIf={isRender} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
