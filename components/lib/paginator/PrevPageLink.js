import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';
import { PrevPageLinkBase } from './PaginatorBase';
import { AngleLeftIcon } from '../icon/angleleft';

export const PrevPageLink = React.memo((inProps) => {
    const props = PrevPageLinkBase.getProps(inProps);

    const className = classNames('p-paginator-prev p-paginator-element p-link', { 'p-disabled': props.disabled });

    const iconClassName = 'p-paginator-icon';
    const icon = props.prevPageLinkIcon || <AngleLeftIcon className={iconClassName} />;
    const prevPageLinkIcon = IconUtils.getJSXIcon(icon, { className: iconClassName }, { props });

    const element = (
        <button type="button" className={className} onClick={props.onClick} disabled={props.disabled} aria-label={ariaLabel('previousPageLabel')}>
            {prevPageLinkIcon}
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
