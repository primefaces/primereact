import * as React from 'react';
import { ariaLabel, PrimeReactContext } from '../api/Api';
import { AngleDoubleRightIcon } from '../icons/angledoubleright';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';
import { LastPageLinkBase } from './PaginatorBase';

export const LastPageLink = React.memo((inProps) => {
    const context = React.useContext(PrimeReactContext);
    const props = LastPageLinkBase.getProps(inProps, context);
    const { ptm, cx } = props;

    const getPTOptions = (key) => {
        return ptm(key, {
            hostName: props.hostName,
            context: {
                disabled: props.disabled
            }
        });
    };

    const className = classNames('p-paginator-last p-paginator-element p-link', { 'p-disabled': props.disabled });
    const iconClassName = 'p-paginator-icon';
    const lastPageIconProps = mergeProps(
        [
            {
                className: cx('lastPageIcon')
            },
            getPTOptions('lastPageIcon')
        ],
        { useTailwind: context.useTailwind }
    );
    const icon = props.lastPageLinkIcon || <AngleDoubleRightIcon {...lastPageIconProps} />;
    const lastPageLinkIcon = IconUtils.getJSXIcon(icon, { ...lastPageIconProps }, { props });
    const lastPageButtonProps = mergeProps(
        [
            {
                type: 'button',
                className: cx('lastPageButton', { disabled: props.disabled }),
                onClick: props.onClick,
                disabled: props.disabled,
                'aria-label': ariaLabel('lastPageLabel')
            },
            getPTOptions('lastPageButton')
        ],
        { useTailwind: context.useTailwind }
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
