import * as React from 'react';
import { ariaLabel, PrimeReactContext } from '../api/Api';
import { useMergeProps } from '../hooks/Hooks';
import { AngleRightIcon } from '../icons/angleright';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';
import { NextPageLinkBase } from './PaginatorBase';

export const NextPageLink = React.memo((inProps) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = NextPageLinkBase.getProps(inProps, context);
    const { ptm, cx } = props;

    const getPTOptions = (key) => {
        return ptm(key, {
            hostName: props.hostName,
            context: {
                disabled: props.disabled
            }
        });
    };

    const className = classNames('p-paginator-next p-paginator-element p-link', { 'p-disabled': props.disabled });

    const iconClassName = 'p-paginator-icon';
    const nextPageIconProps = mergeProps(
        {
            className: cx('nextPageIcon')
        },
        getPTOptions('nextPageIcon')
    );
    const icon = props.nextPageLinkIcon || <AngleRightIcon {...nextPageIconProps} />;
    const nextPageLinkIcon = IconUtils.getJSXIcon(icon, { ...nextPageIconProps }, { props });

    const nextPageButtonProps = mergeProps(
        {
            type: 'button',
            className: cx('nextPageButton', { disabled: props.disabled }),
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
