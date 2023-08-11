import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { AngleDoubleLeftIcon } from '../icons/angledoubleleft';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';
import { FirstPageLinkBase } from './PaginatorBase';
import { PrimeReactContext } from '../api/Api';

export const FirstPageLink = React.memo((inProps) => {
    const context = React.useContext(PrimeReactContext);
    const props = FirstPageLinkBase.getProps(inProps, context);
    const { ptm, cx } = props;

    const getPTOptions = (key) => {
        return ptm(key, {
            context: {
                disabled: props.disabled
            }
        });
    };

    const className = classNames('p-paginator-first p-paginator-element p-link', { 'p-disabled': props.disabled });
    const iconClassName = 'p-paginator-icon';
    const firstPageIconProps = mergeProps(
        {
            className: cx('firstPageIcon')
        },
        getPTOptions('firstPageIcon')
    );
    const icon = props.firstPageLinkIcon || <AngleDoubleLeftIcon {...firstPageIconProps} />;
    const firstPageLinkIcon = IconUtils.getJSXIcon(icon, { ...firstPageIconProps }, { props });
    const firstPageButtonProps = mergeProps(
        {
            type: 'button',
            className: cx('firstPageButton', { disabled: props.disabled }),
            onClick: props.onClick,
            disabled: props.disabled,
            'aria-label': ariaLabel('firstPageLabel')
        },
        getPTOptions('firstPageButton')
    );
    const element = (
        <button {...firstPageButtonProps}>
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
