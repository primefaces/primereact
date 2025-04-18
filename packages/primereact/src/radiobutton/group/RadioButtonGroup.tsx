'use client';
import { Component, withComponent } from '@primereact/core/component';
import { styles } from '@primereact/styles/radiobutton';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './RadioButtonGroup.props';

export const RadioButtonGroup = withComponent({
    defaultProps,
    styles,
    render: ({
        props,
        ptmi,
        cx
        // element refs
        // methods
    }) => {
        const rootProps = mergeProps(
            {
                className: cx('group')
            },
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...rootProps}>
                {props.children}
            </Component>
        );
    }
});
