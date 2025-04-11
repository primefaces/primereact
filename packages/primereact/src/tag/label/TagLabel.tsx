'use client';
import { Component, withComponent } from '@primereact/core/component';
import { styles } from '@primereact/styles/tag';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './TagLabel.props';

export const TagLabel = withComponent({
    defaultProps,
    styles,
    render: ({
        props,
        ptmi,
        getParent
        // element refs
        // methods
    }) => {
        const tag = getParent('Tag');
        const rootProps = mergeProps(
            {
                className: tag?.cx('label')
            },
            tag?.ptm('label'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'span'} {...rootProps}>
                {props.children}
            </Component>
        );
    }
});
