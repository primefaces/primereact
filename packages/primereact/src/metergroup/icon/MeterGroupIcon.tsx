'use client';
import { Icon } from '@primereact/core/icon';
import type { IconProps } from '@primereact/types/core';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useMeterGroupContext } from '../MeterGroup.context';
import { defaultIconProps } from './MeterGroupIcon.props';

export const MeterGroupIcon = withComponent({
    name: 'MeterGroupIcon',
    defaultProps: defaultIconProps,
    setup() {
        const metergroup = useMeterGroupContext();

        return { metergroup };
    },
    render(instance) {
        const { props, ptmi, metergroup } = instance;

        const rootProps = mergeProps(
            {
                className: metergroup?.cx('icon')
            },
            metergroup?.ptm('icon'),
            ptmi('root')
        );

        return <Icon {...(props as IconProps)} {...rootProps} />;
    }
});
