'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useTag } from '@primereact/headless/tag';
import { styles } from '@primereact/styles/tag';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Tag.props';
import { TagIcon } from './icon';
import { TagLabel } from './label';

export const Tag = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const tag = useTag(instance.inProps);

        return tag;
    },
    render: ({
        id,
        props,
        state,
        ptmi,
        ptm,
        cx,
        // element refs
        elementRef
        // methods
    }) => {
        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return state.isRemoved ? null : (
            <Component as={props.as || 'span'} {...rootProps} ref={elementRef}>
                {props.children}
            </Component>
        );
    },
    components: {
        Icon: TagIcon,
        Label: TagLabel
    }
});
