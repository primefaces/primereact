import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';
import { FirstPageLinkBase } from './PaginatorBase';
import { AngleDoubleLeftIcon } from '../icons/angledoubleleft';

export const FirstPageLink = React.memo((inProps) => {
    const props = FirstPageLinkBase.getProps(inProps);

    const className = classNames('p-paginator-first p-paginator-element p-link', { 'p-disabled': props.disabled });

    const iconClassName = 'p-paginator-icon';
    const icon = props.firstPageLinkIcon || <AngleDoubleLeftIcon className={iconClassName} />;
    const firstPageLinkIcon = IconUtils.getJSXIcon(icon, { className: iconClassName }, { props });

    const element = (
        <button type="button" className={className} onClick={props.onClick} disabled={props.disabled} aria-label={ariaLabel('firstPageLabel')}>
            {firstPageLinkIcon}
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

FirstPageLink.displayName = 'FirstPageLink';
