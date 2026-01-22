'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/rating';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { RatingRoot, defaultRootProps } from 'primereact/rating';
import * as React from 'react';

export const UIRatingRoot = withComponent({
    name: 'Rating.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={RatingRoot} attrs={rootProps} />;
    }
});
