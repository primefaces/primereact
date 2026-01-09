'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/rating';
import { withComponent } from '@primereact/ui/base';
import { RatingRoot, defaultRootProps } from 'primereact/rating';
import * as React from 'react';

export const UIRatingRoot = withComponent({
    name: 'UIRatingRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={RatingRoot} attrs={rootProps} />;
    }
});
