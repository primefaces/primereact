'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useInplace } from '@primereact/headless/inplace';
import { styles } from '@primereact/styles/inplace';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Inplace.props';
import { InplaceClose } from './close';
import { InplaceContent } from './content';
import { InplaceDisplay } from './display';
export const Inplace = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const inplace = useInplace(instance.inProps);

        return inplace;
    },
    render: ({
        id,
        props,
        ptmi,
        cx,
        // element refs
        elementRef
    }) => {
        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.children}
            </Component>
        );
    },
    components: {
        Display: InplaceDisplay,
        Content: InplaceContent,
        Close: InplaceClose
    }
});
