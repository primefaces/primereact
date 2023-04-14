import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';
import { LastPageLinkBase } from './PaginatorBase';
import { AngleDoubleRightIcon } from '../icon/angledoubleright';

export const LastPageLink = React.memo((inProps) => {
    const props = LastPageLinkBase.getProps(inProps);

    const className = classNames('p-paginator-last p-paginator-element p-link', { 'p-disabled': props.disabled });
    const iconClassName = 'p-paginator-icon';
    const icon = props.lastPageLinkIcon || <AngleDoubleRightIcon className={iconClassName} />;
    const lastPageLinkIcon = IconUtils.getJSXIcon(icon, { className: iconClassName }, { props });
    const element = (
        <button type="button" className={className} onClick={props.onClick} disabled={props.disabled} aria-label={ariaLabel('lastPageLabel')}>
            {lastPageLinkIcon}
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

LastPageLink.displayName = 'LastPageLink';
