'use client';
import { Component } from '@primereact/core/component';
import { AngleDownIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useInputNumberContext } from '../InputNumber.context';
import { defaultDecrementProps } from './InputNumberDecrement.props';

export const InputNumberDecrement = withComponent({
    name: 'InputNumberDecrement',
    defaultProps: defaultDecrementProps,
    setup() {
        const inputnumber = useInputNumberContext();

        return { inputnumber };
    },
    render(instance) {
        const { props, ptmi, inputnumber } = instance;

        const rootProps = mergeProps(
            {
                className: inputnumber?.cx('decrement'),
                type: 'button',
                'aria-hidden': true,
                tabIndex: -1,
                disabled: inputnumber?.props.disabled,
                onMouseDown: inputnumber?.onDownButtonMouseDown,
                onMouseUp: inputnumber?.onDownButtonMouseUp,
                onMouseLeave: inputnumber?.onDownButtonMouseLeave,
                onKeyUp: inputnumber?.onDownButtonKeyUp,
                onKeyDown: inputnumber?.onDownButtonKeyDown
            },
            inputnumber?.ptm('decrement'),
            ptmi('root')
        );

        const createIconElement = () => {
            return <AngleDownIcon pt={inputnumber?.ptm('decrementIcon')} />;
        };

        const icon = createIconElement();

        return <Component instance={instance} attrs={rootProps} children={props.children ?? icon} />;
    }
});
