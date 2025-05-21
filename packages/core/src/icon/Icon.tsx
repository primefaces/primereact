import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Icon.props';
import { styles } from './Icon.style';
import { withIcon } from './withIcon';

export const Icon = withIcon({
    name: 'Icon',
    styles,
    defaultProps,
    render(instance) {
        const { id, props, ptmi, pti, cx, sx } = instance;

        const rootProps = mergeProps(
            {
                id,
                style: sx('root'),
                className: cx('root')
            },
            pti(),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
