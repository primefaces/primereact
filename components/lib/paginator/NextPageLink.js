import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { Ripple } from '../ripple/Ripple';
import { classNames, ObjectUtils } from '../utils/Utils';
import { NextPageLinkBase } from './PaginatorBase';

export const NextPageLink = React.memo((inProps) => {
    const props = NextPageLinkBase.getProps(inProps);

    const className = classNames('p-paginator-next p-paginator-element p-link', { 'p-disabled': props.disabled });
    const iconClassName = 'p-paginator-icon pi pi-angle-right';
    const element = (
        <button type="button" className={className} onClick={props.onClick} disabled={props.disabled} aria-label={ariaLabel('nextPageLabel')}>
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

NextPageLink.displayName = 'NextPageLink';
