'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/commandmenu';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useCommandMenuContext } from '../CommandMenu.context';
import { defaultGroupHeadingProps } from './CommandMenuGroupHeading.props';

export const CommandMenuGroupHeading = withComponent({
    name: 'CommandMenuGroupHeading',
    defaultProps: defaultGroupHeadingProps,
    styles,
    setup() {
        const commandmenu = useCommandMenuContext();

        return {
            commandmenu
        };
    },
    render(instance) {
        const { id, props, ptmi, commandmenu } = instance;

        const rootProps = mergeProps(
            {
                id,
                role: 'heading',
                className: commandmenu?.cx('groupheading')
            },
            commandmenu?.ptm('groupheading'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
