import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { AngleLeftIcon } from '../icons/angleleft';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';
import { PrevPageLinkBase } from './PaginatorBase';
import { PrimeReactContext } from '../api/Api';

export const PrevPageLink = React.memo((inProps) => {
    const context = React.useContext(PrimeReactContext);
    const props = PrevPageLinkBase.getProps(inProps, context);
    const { ptm, cx } = props;

    const getPTOptions = (key) => {
        return ptm(key, {
            context: {
                disabled: props.disabled
            }
        });
    };

    const className = classNames('p-paginator-prev p-paginator-element p-link', { 'p-disabled': props.disabled });
    const iconClassName = 'p-paginator-icon';
    const prevPageIconProps = mergeProps(
        {
            className: cx('prevPageIcon')
        },
        getPTOptions('prevPageIcon')
    );
    const icon = props.prevPageLinkIcon || <AngleLeftIcon {...prevPageIconProps} />;
    const prevPageLinkIcon = IconUtils.getJSXIcon(icon, { ...prevPageIconProps }, { props });

    const prevPageButtonProps = mergeProps(
        {
            type: 'button',
            className: cx('prevPageButton', { disabled: props.disabled }),
            onClick: props.onClick,
            disabled: props.disabled,
            'aria-label': ariaLabel('previousPageLabel')
        },
        getPTOptions('prevPageButton')
    );
    const element = (
        <button {...prevPageButtonProps}>
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
