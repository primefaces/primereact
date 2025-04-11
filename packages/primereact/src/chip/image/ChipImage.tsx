'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './ChipImage.props';

export const ChipImage = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent } = instance;
        const chip = getParent('Chip');

        const imageProps = mergeProps(
            {
                className: chip?.cx('image'),
                src: props.src
            },
            chip?.ptm('image')
        );

        return <Component as={props.as || 'img'} {...imageProps}></Component>;
    }
});
