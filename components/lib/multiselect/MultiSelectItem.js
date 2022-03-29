import React, { memo } from 'react';
import { Ripple } from '../ripple/Ripple';
import { ObjectUtils, classNames } from '../utils/Utils';

export const MultiSelectItem = memo((props) => {

    const onClick = (event) => {
        if (props.onClick) {
            props.onClick({
                originalEvent: event,
                option: props.option
            });
        }

        event.preventDefault();
    }

    const onKeyDown = (event) => {
        if (props.onKeyDown) {
            props.onKeyDown({
                originalEvent: event,
                option: props.option
            });
        }
    }

    const className = classNames('p-multiselect-item', {
        'p-highlight': props.selected,
        'p-disabled': props.disabled
    }, props.option.className);
    const checkboxClassName = classNames('p-checkbox-box', {
        'p-highlight': props.selected
    });
    const checkboxIcon = classNames('p-checkbox-icon p-c', {
        'pi pi-check': props.selected
    });
    const content = props.template ? ObjectUtils.getJSXElement(props.template, props.option) : props.label;
    const tabIndex = props.disabled ? null : props.tabIndex || 0;

    return (
        <li className={className} onClick={onClick} tabIndex={tabIndex} onKeyDown={onKeyDown} role="option" aria-selected={props.selected}>
            <div className="p-checkbox p-component">
                <div className={checkboxClassName}>
                    <span className={checkboxIcon}></span>
                </div>
            </div>
            <span>{content}</span>
            <Ripple />
        </li>
    )
});
