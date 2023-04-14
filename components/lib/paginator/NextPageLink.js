import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';
import { NextPageLinkBase } from './PaginatorBase';
import { AngleRightIcon } from '../icon/angleright';

export const NextPageLink = React.memo((inProps) => {
    const props = NextPageLinkBase.getProps(inProps);
    const className = classNames('p-paginator-next p-paginator-element p-link', { 'p-disabled': props.disabled });

    const iconClassName = 'p-paginator-icon';
    const icon = props.nextPageLinkIcon || <AngleRightIcon className={iconClassName} />;
    const nextPageLinkIcon = IconUtils.getJSXIcon(icon, { className: iconClassName }, { props });

    const element = (
        <button type="button" className={className} onClick={props.onClick} disabled={props.disabled} aria-label={ariaLabel('nextPageLabel')}>
            {nextPageLinkIcon}
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
            nextPageLinkIcon,
            props
        };

        return ObjectUtils.getJSXElement(props.template, defaultOptions);
    }

    return element;
});

NextPageLink.displayName = 'NextPageLink';
