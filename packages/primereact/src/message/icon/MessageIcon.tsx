'use client';
import { Icon } from '@primereact/core/icon';
import type { IconProps } from '@primereact/types/core';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useMessageContext } from '../Message.context';
import { defaultIconProps } from './MessageIcon.props';

export const MessageIcon = withComponent({
    name: 'MessageIcon',
    defaultProps: defaultIconProps,
    setup() {
        const message = useMessageContext();

        return { message };
    },
    render(instance) {
        const { props, ptmi, message } = instance;

        const rootProps = mergeProps(
            {
                className: message?.cx('icon')
            },
            message?.ptm('icon'),
            ptmi('root')
        );

        return <Icon {...(props as IconProps)} {...rootProps} />;
    }
});
