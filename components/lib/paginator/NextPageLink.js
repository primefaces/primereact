import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { AngleRightIcon } from '../icons/angleright';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';
import { NextPageLinkBase } from './PaginatorBase';
import { PrimeReactContext } from '../api/Api';

export const NextPageLink = React.memo((inProps) => {
    const context = React.useContext(PrimeReactContext);
    const props = NextPageLinkBase.getProps(inProps, context);

    const getPTOptions = (key) => {
        return props.ptm(key, {
            context: {
                disabled: props.disabled
            }
        });
    };

    const className = classNames('p-paginator-next p-paginator-element p-link', { 'p-disabled': props.disabled });

    const iconClassName = 'p-paginator-icon';
    const nextPageIconProps = mergeProps(
        {
            className: iconClassName
        },
        getPTOptions('nextPageIcon')
    );
    const icon = props.nextPageLinkIcon || <AngleRightIcon {...nextPageIconProps} />;
    const nextPageLinkIcon = IconUtils.getJSXIcon(icon, { ...nextPageIconProps }, { props });

    const nextPageButtonProps = mergeProps(
        {
            type: 'button',
            className,
            onClick: props.onClick,
            disabled: props.disabled,
            'aria-label': ariaLabel('nextPageLabel')
        },
        getPTOptions('nextPageButton')
    );

    const element = (
        <button {...nextPageButtonProps}>
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
