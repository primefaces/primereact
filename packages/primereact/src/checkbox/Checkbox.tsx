'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useCheckbox } from '@primereact/headless/checkbox';
import { CheckIcon } from '@primereact/icons/check';
import { MinusIcon } from '@primereact/icons/minus';
import { styles } from '@primereact/styles/checkbox';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Checkbox.props';
import { CheckboxGroup } from './group';

export const Checkbox = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const checkbox = useCheckbox(instance.inProps);

        return checkbox;
    },
    render: (instance) => {
        const {
            id,
            props,
            state,
            ptmi,
            ptm,
            cx,
            getParent,
            // element refs
            elementRef,
            // methods
            onChange,
            setCheckboxGroup
        } = instance;

        const checkboxGroup = getParent('CheckboxGroup');

        setCheckboxGroup(checkboxGroup);

        const getPTOptions = (key: string) => {
            const _ptm = key === 'root' ? ptmi : ptm;

            return _ptm(key, {
                context: {
                    checked: state.checked,
                    indeterminate: state.indeterminate,
                    disabled: props.disabled
                }
            });
        };

        const createInputElement = () => {
            const inputProps = mergeProps(
                {
                    id: props.inputId,
                    type: 'checkbox',
                    className: cx('input'),
                    value: props.value,
                    name: props.name,
                    checked: state.checked,
                    tabIndex: props.tabIndex,
                    disabled: props.disabled,
                    readOnly: props.readOnly,
                    required: props.required,
                    'aria-labelledby': props.ariaLabelledby,
                    'aria-label': props.ariaLabel,
                    'aria-invalid': props.invalid || undefined,
                    'aria-checked': state.indeterminate ? 'mixed' : undefined,
                    onFocus: props.onFocus,
                    onBlur: props.onBlur,
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

            const icon = state.checked ? <CheckIcon {...iconProps} /> : state.indeterminate ? <MinusIcon {...iconProps} /> : null;

            return <div {...boxProps}>{icon}</div>;
        };

        const input = createInputElement();
        const box = createBoxElement();

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {input}
                {box}
            </Component>
        );
    },
    components: {
        Group: CheckboxGroup
    }
});
