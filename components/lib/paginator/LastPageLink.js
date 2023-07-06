import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { AngleDoubleRightIcon } from '../icons/angledoubleright';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';
import { LastPageLinkBase } from './PaginatorBase';
import { PrimeReactContext } from '../api/Api';

export const LastPageLink = React.memo((inProps) => {
    const context = React.useContext(PrimeReactContext);
    const props = LastPageLinkBase.getProps(inProps, context);

    const getPTOptions = (key) => {
        return props.ptm(key, {
            context: {
                disabled: props.disabled
            }
        });
    };

    const className = classNames('p-paginator-last p-paginator-element p-link', { 'p-disabled': props.disabled });
    const iconClassName = 'p-paginator-icon';
    const lastPageIconProps = mergeProps(
        {
            className: iconClassName
        },
        getPTOptions('lastPageIcon')
    );
    const icon = props.lastPageLinkIcon || <AngleDoubleRightIcon {...lastPageIconProps} />;
    const lastPageLinkIcon = IconUtils.getJSXIcon(icon, { ...lastPageIconProps }, { props });
    const lastPageButtonProps = mergeProps(
        {
            type: 'button',
            className,
            onClick: props.onClick,
            disabled: props.disabled,
            'aria-label': ariaLabel('lastPageLabel')
        },
        getPTOptions('lastPageButton')
    );
    const element = (
        <button {...lastPageButtonProps}>
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
