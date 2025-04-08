'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useRadioButton } from '@primereact/headless/radiobutton';
import { styles } from '@primereact/styles/radiobutton';
import { cn, mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './RadioButton.props';
import { RadioButtonGroup } from './group';

export const RadioButton = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const radioButton = useRadioButton(instance.inProps);

        return radioButton;
    },
    render: ({
        props,
        state,
        ptmi,
        ptm,
        cx,
        getParent,
        // element refs
        elementRef,
        // methods
        onFocus,
        onBlur,
        onChange,
        setRadioButtonGroup
    }) => {
        const radioButtonGroup = getParent('RadioButtonGroup');

        setRadioButtonGroup(radioButtonGroup);

        const getPTOptions = (key: string) => {
            const _ptm = key === 'root' ? ptmi : ptm;

            return _ptm(key, {
                context: {
                    checked: state.checked,
                    disabled: props.disabled
                }
            });
        };

        const createInputElement = () => {
            const inputProps = mergeProps(
                {
                    id: props.inputId,
                    type: 'radio',
                    className: cn(cx('input'), props.inputClassName),
                    value: props.value,
                    name: props.name,
                    checked: state.checked,
                    tabIndex: props.tabIndex,
                    disabled: props.disabled,
                    readOnly: props.readOnly,
                    'aria-labelledby': props.ariaLabelledby,
                    'aria-label': props.ariaLabel,
                    'aria-invalid': props.invalid || undefined,
                    onFocus,
                    onBlur,
                    onChange
                },
                getPTOptions('input')
            );

            return <input {...inputProps} />;
        };

        const createBoxElement = () => {
            const boxProps = mergeProps(
                {
                    className: cx('box')
                },
                getPTOptions('box')
            );
            const iconProps = mergeProps(
                {
                    className: cx('icon')
                },
                getPTOptions('icon')
            );

            return (
                <div {...boxProps}>
                    <div {...iconProps} />
                </div>
            );
        };

        const rootProps = mergeProps(
            {
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {createInputElement()}
                {createBoxElement()}
            </Component>
        );
    },
    components: {
        Group: RadioButtonGroup
    }
});
