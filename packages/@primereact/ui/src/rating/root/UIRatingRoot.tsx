'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/rating';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { RatingRoot, defaultRootProps } from 'primereact/rating';
import * as React from 'react';

export const UIRatingRoot = withComponent({
    name: 'RatingRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={RatingRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
