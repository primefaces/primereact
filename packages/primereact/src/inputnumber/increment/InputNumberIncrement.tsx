'use client';
import { Component } from '@primereact/core/component';
import { AngleUpIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useInputNumberContext } from '../InputNumber.context';
import { defaultIncrementProps } from './InputNumberIncrement.props';

export const InputNumberIncrement = withComponent({
    name: 'InputNumberIncrement',
    defaultProps: defaultIncrementProps,
    setup() {
        const inputnumber = useInputNumberContext();

        return { inputnumber };
    },
    render(instance) {
        const { props, ptmi, inputnumber } = instance;

        const rootProps = mergeProps(
            {
                className: inputnumber?.cx('increment'),
                type: 'button',
                'aria-hidden': true,
                tabIndex: -1,
                disabled: inputnumber?.props.disabled,
                onMouseDown: inputnumber?.onUpButtonMouseDown,
                onMouseUp: inputnumber?.onUpButtonMouseUp,
                onMouseLeave: inputnumber?.onUpButtonMouseLeave,
                onKeyUp: inputnumber?.onUpButtonKeyUp,
                onKeyDown: inputnumber?.onUpButtonKeyDown
            },
            inputnumber?.ptm('increment'),
            ptmi('root')
        );

        const createIconElement = () => {
            return <AngleUpIcon pt={inputnumber?.ptm('incrementIcon')} />;
        };

        const icon = createIconElement();

        return <Component instance={instance} attrs={rootProps} children={props.children ?? icon} />;
    }
});
