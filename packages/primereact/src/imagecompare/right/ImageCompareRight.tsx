'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useImageCompareContext } from '../ImageCompare.context';
import { defaultProps } from './ImageCompareRight.props';

export const ImageCompareRight = withComponent({
    name: 'ImageCompareRight',
    defaultProps,
    setup() {
        const imagecompare = useImageCompareContext();

        return { imagecompare };
    },
    render(instance) {
        const { props, ptmi, elementRef, imagecompare } = instance;

        React.useEffect(() => {
            if (!elementRef.current) return;

            imagecompare?.registerRightImage(elementRef.current as HTMLImageElement);
        }, [elementRef.current]);

        const rootProps = mergeProps(ptmi('root'));

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
