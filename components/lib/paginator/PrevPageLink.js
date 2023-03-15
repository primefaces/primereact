import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { Ripple } from '../ripple/Ripple';
import { classNames, ObjectUtils } from '../utils/Utils';
import { PrevPageLinkBase } from './PaginatorBase';

export const PrevPageLink = React.memo((inProps) => {
    const props = PrevPageLinkBase.getProps(inProps);

    const className = classNames('p-paginator-prev p-paginator-element p-link', { 'p-disabled': props.disabled });
    const iconClassName = 'p-paginator-icon pi pi-angle-left';
    const element = (
        <button type="button" className={className} onClick={props.onClick} disabled={props.disabled} aria-label={ariaLabel('previousPageLabel')}>
            <span className={iconClassName}></span>
            <Ripple />
        </button>
    );

    if (props.template) {
        const defaultOptions = {
            onClick: props.onClick,
            className,
            iconClassName,
            disabled: props.disabled,
            element,
            props
        };

        return ObjectUtils.getJSXElement(props.template, defaultOptions);
    }

    return element;
});

PrevPageLink.displayName = 'PrevPageLink';
